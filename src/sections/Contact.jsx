import { useState } from 'react';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { contact, profile } from '../data/portfolio';
import './Contact.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUEST_TIMEOUT_MS = 15000;

const fields = [
  { name: 'name', label: 'Nombre', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'message', label: 'Mensaje', multiline: true },
];

const validate = (data) => {
  const errors = {};
  if (!data.get('name')?.trim()) errors.name = 'Escribe tu nombre.';
  const email = data.get('email')?.trim() ?? '';
  if (!email) errors.email = 'Escribe tu email para poder responderte.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Revisa el formato del email (ej.: nombre@dominio.cl).';
  if (!data.get('message')?.trim()) errors.message = 'Escribe un mensaje.';
  return errors;
};

const channels = [
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'phone', label: 'Teléfono', value: contact.phone, href: contact.phoneHref },
  { icon: 'linkedin', label: 'LinkedIn', value: 'in/hectorsanhueza', href: contact.linkedin, external: true },
  { icon: 'github', label: 'GitHub', value: 'JS-Ranker', href: contact.github, external: true },
];

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstInvalid = fields.find((field) => nextErrors[field.name]);
    if (firstInvalid) {
      form.elements[firstInvalid.name].focus();
      return;
    }

    setStatus('sending');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Formspree respondió ${response.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timeout);
    }
  };

  const clearError = (name) => {
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <div className="container section-grid">
        <SectionHeading
          index="05"
          id="contacto-title"
          title="Contacto"
          lead="¿Tienes una oportunidad o un proyecto en mente? Escríbeme y te respondo a la brevedad."
        />

        <div className="contact" data-reveal>
          <ul className="contact-channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon name={channel.icon} />
                  <span>
                    <span className="contact-label">{channel.label}</span>
                    <span className="contact-value">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="contact-location">
              <Icon name="pin" />
              <span>
                <span className="contact-label">Ubicación</span>
                <span className="contact-value">{profile.location}</span>
              </span>
            </li>
          </ul>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {fields.map((field) => {
              const id = `contact-${field.name}`;
              const errorId = `${id}-error`;
              const Control = field.multiline ? 'textarea' : 'input';
              return (
                <div key={field.name} className="field">
                  <label htmlFor={id}>{field.label}</label>
                  <Control
                    id={id}
                    name={field.name}
                    type={field.multiline ? undefined : field.type}
                    rows={field.multiline ? 5 : undefined}
                    autoComplete={field.autoComplete}
                    required
                    aria-invalid={errors[field.name] ? 'true' : undefined}
                    aria-describedby={errors[field.name] ? errorId : undefined}
                    onInput={() => clearError(field.name)}
                  />
                  {errors[field.name] && (
                    <p id={errorId} className="field-error">{errors[field.name]}</p>
                  )}
                </div>
              );
            })}

            <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
            {/* Campo trampa para bots (Formspree descarta envíos que lo completan). */}
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="contact-gotcha">No completar este campo</label>
              <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                <Icon name="send" size={16} />
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>
              <p className={`form-status form-status--${status}`} role="status">
                {status === 'success' && '¡Gracias! Tu mensaje fue enviado. Te responderé pronto.'}
                {status === 'error' && (
                  <>
                    No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a{' '}
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
