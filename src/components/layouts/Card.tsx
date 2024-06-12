// Styles
import '../../styles/Card.scss'

type CardProps = {
  children: React.ReactNode
  button?: React.ReactNode
  title?: string
  width?: string
  height?: string
  contentHeight?: string
  icon?: string
  scroll?: boolean
}

export default function Card({
  children,
  title,
  width,
  height,
  contentHeight,
  icon,
  button,
  scroll,
}: CardProps) {
  return (
    <section
      className="card"
      style={{
        width: '100%',
        maxHeight: height,
        maxWidth: width,
      }}
    >
      {title && (
        <div className="card-header">
          <div className="card-title">
            <h4>{title}</h4>
            {icon && <img src={icon} alt={title} />}
          </div>
          {button && button}
        </div>
      )}
      <div
        className="card-content"
        style={{
          height: contentHeight,
          overflowY: scroll ? 'scroll' : 'hidden',
        }}
      >
        {children}
      </div>
    </section>
  )
}
