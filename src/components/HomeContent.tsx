// Styles
import '../styles/HomeContent.scss'

// Components
import Quests from './home-content/Quests'
import RecentMessages from './home-content/RecentMessages'
import Cta from './home-content/Cta'
import Challenges from './home-content/challenges/Challenges'
import WeeklyGoals from './home-content/WeeklyGoals'

export default function HomeContent() {
  return (
    <section className="home-content">
      <div className="left">
        <Quests />
        <RecentMessages />
      </div>
      <div className="right">
        <Cta />
        <WeeklyGoals />
        <Challenges />
      </div>
    </section>
  )
}
