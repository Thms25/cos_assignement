// Components
import LeaderCard from './LeaderCard'

// Styles
import '../../../styles/Leaderboard.scss'

// Assets
import gold from '../../../assets/svg/leader/gold.svg'
import silver from '../../../assets/svg/leader/silver.svg'
import bronze from '../../../assets/svg/leader/bronze.svg'
import Card from '../../layouts/Card'

export default function Leaderboard() {
  const leaders = [
    {
      name: 'Fellow [University] Rockstar',
      avatar:
        'https://s3-alpha-sig.figma.com/img/e11b/8367/ab4d88578bdc50fbfd21a5c136ab2173?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4bfNYV8MHMn08OUnbSb2DYKhgxBFt0G8tm9yQitos5Q3jQ5AuHuQKcMwj8~iRlOzkZOv6qqkcCiGKYbrTlSmNRRM8tNYYcjWK6iw6cImEew99XKCNkRmjku3X0rw7rsLImoufAUoAAqXP9pUjIH9gEG56WPo7x3cuNdccgAKDJrq0UypPaQaHuFP9KFQuVVh8lX7ZxEJ8QOYgDClwkqoeIgPuQ7qcpaJmcyIwlNFihCAZPgLDjqj7DhRnrpN-LniLaMVqfiZyeuwgwYTpj~OzaJTMUSnS3DF2My0tQQFuYa1Hql5hRzNzfCODo1dyhMPZhmGzLHqIL4kCfz5j7dvQ__',
      quests: 4,
      medal: gold,
      style: {
        backgroundColor: 'rgba(255, 243, 217, 1)',
      },
    },
    {
      name: 'Fellow [University] Rockstar',
      avatar:
        'https://s3-alpha-sig.figma.com/img/e11b/8367/ab4d88578bdc50fbfd21a5c136ab2173?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4bfNYV8MHMn08OUnbSb2DYKhgxBFt0G8tm9yQitos5Q3jQ5AuHuQKcMwj8~iRlOzkZOv6qqkcCiGKYbrTlSmNRRM8tNYYcjWK6iw6cImEew99XKCNkRmjku3X0rw7rsLImoufAUoAAqXP9pUjIH9gEG56WPo7x3cuNdccgAKDJrq0UypPaQaHuFP9KFQuVVh8lX7ZxEJ8QOYgDClwkqoeIgPuQ7qcpaJmcyIwlNFihCAZPgLDjqj7DhRnrpN-LniLaMVqfiZyeuwgwYTpj~OzaJTMUSnS3DF2My0tQQFuYa1Hql5hRzNzfCODo1dyhMPZhmGzLHqIL4kCfz5j7dvQ__',
      quests: 4,
      medal: silver,
      style: {
        backgroundColor: 'rgba(226, 226, 226, 1)',
      },
    },
    {
      name: 'Fellow [University] Rockstar',
      avatar:
        'https://s3-alpha-sig.figma.com/img/e11b/8367/ab4d88578bdc50fbfd21a5c136ab2173?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4bfNYV8MHMn08OUnbSb2DYKhgxBFt0G8tm9yQitos5Q3jQ5AuHuQKcMwj8~iRlOzkZOv6qqkcCiGKYbrTlSmNRRM8tNYYcjWK6iw6cImEew99XKCNkRmjku3X0rw7rsLImoufAUoAAqXP9pUjIH9gEG56WPo7x3cuNdccgAKDJrq0UypPaQaHuFP9KFQuVVh8lX7ZxEJ8QOYgDClwkqoeIgPuQ7qcpaJmcyIwlNFihCAZPgLDjqj7DhRnrpN-LniLaMVqfiZyeuwgwYTpj~OzaJTMUSnS3DF2My0tQQFuYa1Hql5hRzNzfCODo1dyhMPZhmGzLHqIL4kCfz5j7dvQ__',
      quests: 4,
      medal: bronze,
      style: {
        backgroundColor: 'rgba(252, 228, 207, 1)',
      },
    },
  ]

  return (
    <Card width="862.5px" height="420px" contentHeight="250px" scroll>
      <section className="leaderboard-container">
        <header className="leader-header">
          <h2 className="leader-title">
            <span>[School] [Cohort]</span>Leaderboard
          </h2>
          <h4 className="leader-subtitle">
            <span>Complete quests </span>
            and climb the ladder ✨
          </h4>
        </header>

        <div className="leader-cards">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              avatar={leader.avatar}
              name={leader.name}
              quests={leader.quests}
              medal={leader.medal}
              style={leader.style}
              position={index + 1}
            />
          ))}
        </div>

        <div className="leader-intersection">
          <span className="line" />
          <p>+14</p>
          <span className="line" />
        </div>

        <div className="leader-cards">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              avatar={leader.avatar}
              name={leader.name}
              quests={leader.quests - index}
            />
          ))}
        </div>
      </section>
    </Card>
  )
}
