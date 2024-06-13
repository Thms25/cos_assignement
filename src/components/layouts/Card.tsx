// Styles
import '../../styles/Card.scss'
import { Reveal } from '../animations/Reveal'

type CardProps = {
  children: React.ReactNode
  button?: React.ReactNode
  title?: string
  width?: string
  height?: string
  contentHeight?: string
  icon?: string
  scroll?: boolean
  gap?: boolean
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
  gap,
}: CardProps) {
  return (
    <section
      className="card"
      style={{
        width: '100%',
        maxHeight: height,
        maxWidth: width,
        padding: !title ? '0' : '24px 0px',
        gap: gap ? '16px' : '0',
      }}
    >
      {title && (
        <Reveal>
          <div className="card-header">
            <div className="card-title">
              <h4>{title}</h4>
              {icon && <img src={icon} alt={title} />}
            </div>
            {button && button}
          </div>
        </Reveal>
      )}
      <div
        style={{
          height: contentHeight,
          overflowY: scroll ? 'scroll' : 'hidden',
          padding: gap ? '0 24px' : '16px 24px',
        }}
      >
        <Reveal dly={0.5} duration={1}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
