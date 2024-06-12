// Styles
import '../../styles/Card.scss'

type CardProps = {
  children: React.ReactNode
  button?: React.ReactNode
  title: string
  width?: string
  height?: string
  contentHeight?: string
  icon?: string
}

export default function Card({
  children,
  title,
  width,
  height,
  contentHeight,
  icon,
  button,
}: CardProps) {
  return (
    <section
      className="card"
      style={{
        width: '100%',
        height,
        maxWidth: width,
      }}
    >
      <div className="card-header">
        <div className="card-title">
          <h4>{title}</h4>
          {icon && <img src={icon} alt={title} />}
        </div>
        {button && button}
      </div>
      <div
        className="card-content"
        style={{
          height: contentHeight,
        }}
      >
        {children}
      </div>
    </section>
  )
}
