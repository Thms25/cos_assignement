// Assets
import Pencil from '../../../assets/svg/Pencil.svg'

// Styles
import '../../../styles/WeeklyGoals.scss'

// -----------------------------------------------------------------

export default function GoalsCta() {
  return (
    <div className="goals-cta">
      <img src={Pencil} alt="pencil icon" />
      <p>Set own goals</p>
    </div>
  )
}
