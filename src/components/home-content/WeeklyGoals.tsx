import Card from '../layouts/Card'
import GoalCard from './GoalCard'
import GoalsCta from './GoalsCta'

// Assets
import Ellipse_20 from '../../assets/svg/goals/Ellipse_20.svg'
import Ellipse_40 from '../../assets/svg/goals/Ellipse_40.svg'
import Ellipse_60 from '../../assets/svg/goals/Ellipse_60.svg'

export default function WeeklyGoals() {
  const goals = [
    {
      title: 'Explore Companies',
      text: 'companies saved',
      circle: Ellipse_20,
      ratio: '1/5',
    },
    {
      title: 'Expand Network',
      text: 'contacts saved',
      circle: Ellipse_40,
      ratio: '2/5',
    },
    {
      title: 'Keep Networking',
      text: 'invitations saved',
      circle: Ellipse_60,
      ratio: '3/5',
    },
  ]
  return (
    <Card
      title="Weekly Goals"
      width="862.5px"
      height="279px"
      contentHeight="250px"
      button={<GoalsCta />}
    >
      <section className="weekly-goals">
        {goals.map((goal, index) => (
          <GoalCard
            key={index}
            title={goal.title}
            text={goal.text}
            circle={goal.circle}
            ratio={goal.ratio}
          />
        ))}
      </section>
    </Card>
  )
}
