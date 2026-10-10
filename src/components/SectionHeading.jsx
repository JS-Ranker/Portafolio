const SectionHeading = ({ index, id, title, lead }) => (
  <div className="section-heading">
    <span className="section-index" aria-hidden="true">{index}</span>
    <h2 id={id} className="section-title">{title}</h2>
    {lead && <p className="section-lead">{lead}</p>}
  </div>
);

export default SectionHeading;
