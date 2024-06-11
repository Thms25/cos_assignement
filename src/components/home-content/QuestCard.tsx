import React from 'react'

// styles
import '../../styles/QuestCard.scss'

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
          <img src={icon} alt="icon" width={45} height={45} />
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
