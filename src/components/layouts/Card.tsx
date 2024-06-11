// Styles
import '../../styles/Card.scss'

type CardProps = {
  children: React.ReactNode
  title: string
  width?: string
  height?: string
  contentHeight?: string
  icon?: string
}

export default function Card({
  children,
  title,
  width = '600px',
  height,
  contentHeight,
  icon,
}: CardProps) {
  return (
    <section
      className="card"
      style={{
        width,
        height,
      }}
    >
      <div className="title">
        <h4>{title}</h4>
        {icon && <img src={icon} alt={title} />}
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
