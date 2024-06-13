// Styles
import '../styles/HomeContent.scss'

// Components
import Quests from './home-content/quests/Quests'
import RecentMessages from './home-content/messages/RecentMessages'
import Cta from './home-content/cta/Cta'
import Challenges from './home-content/challenges/Challenges'
import WeeklyGoals from './home-content/goals/WeeklyGoals'
import Leaderboard from './home-content/leaderboard/Leaderboard'

// --------------------------------------------

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
        <Leaderboard />
      </div>
    </section>
  )
}
