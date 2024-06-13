// Styles
import '../../../styles/WeeklyGoals.scss'

// Assets
import Ellipse_base from '../../../assets/svg/goals/Ellipse_base.svg'

// Types
type GoalCardProps = {
  title: string
  text: string
  circle: any
  ratio: string
}

// --------------------------------------------------------

export default function GoalCard({
  title,
  text,
  circle,
  ratio,
}: GoalCardProps) {
  return (
    <div className="goal-card">
      <div className="goal-frame">
        <img src={Ellipse_base} alt="Ellipse_base" className="ellipse-base" />
        <img src={circle} alt="Ellipse_value" className="ellipse-value" />
        <div className="frame-text">
          <h4>{ratio}</h4>
          <p>{text}</p>
        </div>
      </div>
      <div className="goal-btn">
        <h6>{title}</h6>
      </div>
    </div>
  )
}
