// styles
import '../../styles/QuestCard.scss'
import Avatar from '../layouts/Avatar'

// --------------------------------------------------------

type QuestProps = {
  title: string
  subtitle: string
  icon?: any
  button?: string
}

export default function QuestCard({
  title,
  subtitle,
  icon,
  button,
}: QuestProps) {
  return (
    <div className="quest-card">
      <div className="quest-content">
        <div className="quest-icon">
          <Avatar src={icon} width="45px" height="45px" />
        </div>

        <div className="quest-text">
          <h4 className="quest-title">{title}</h4>
          <h6 className="quest-subtitle">{subtitle}</h6>
        </div>
        {button && (
          <div className="quest-btn">
            <img src={button} alt="icon" />
          </div>
        )}
      </div>
    </div>
  )
}
