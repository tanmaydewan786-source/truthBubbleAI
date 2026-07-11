import './MediaPreview.css'

function MediaPreview({ title, description, videoSrc, imageSrc, imageAlt }) {
  return (
    <section className="media-preview">
      <div className="media-preview-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="media-preview-panels">
        {videoSrc ? (
          <div className="media-card">
            <video controls src={videoSrc} className="feature-video" />
            <p className="media-caption">Press play to view the Truth Bubble highlight.</p>
          </div>
        ) : null}
        {imageSrc ? (
          <div className="media-card image-card">
            <img src={imageSrc} alt={imageAlt} className="page-image" />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default MediaPreview;
