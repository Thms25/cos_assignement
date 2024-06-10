import React from 'react'

// styles
import '../../styles/QuestCard.scss'

type QuestProps = {
  key?: string
  title: string
  subtitle: string
  icon?: any
  button?: string
}

export default function QuestCard({
  key,
  title,
  subtitle,
  icon,
  button,
}: QuestProps) {
  return (
    <div key={key} className="quest-card">
      <div className="quest-icon">
        <img src={icon} alt="icon" width={45} height={45} />
      </div>

      <div className="card-content">
        <div className="quest-info">
          <h4>{title}</h4>
        </div>
        <div className="quest-date">
          <h6>{subtitle}</h6>
        </div>
      </div>

      {button && (
        <div className="quest-icon">
          <img src={button} alt="icon" />
        </div>
      )}
    </div>
  )
}
