import './SectionCard.css'

function SectionCard({ title, children }) {
  return (
    <article className="section-card">
      <h2>{title}</h2>
      <div className="section-card-body">{children}</div>
    </article>
  )
}

export default SectionCard;
