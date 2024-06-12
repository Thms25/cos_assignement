// Styles
import '../../../styles/Leaderboard.scss'

// Components
import Avatar from '../../layouts/Avatar'

// Assets
import star from '../../../assets/svg/leader/star.svg'

// Types

type LeaderCardProps = {
  avatar: string
  name: string
  quests: number
  medal?: string
  style?: React.CSSProperties
  position?: number
}

// ------------------------------------------------

export default function LeaderCard({
  avatar,
  name,
  quests,
  medal,
  style,
  position,
}: LeaderCardProps) {
  return (
    <div className="leader-card">
      {medal ? (
        <div className="leader-medal" style={style}>
          <img src={medal} alt="medal" />
          <p>{position}</p>
        </div>
      ) : (
        <div className="leader-medal" />
      )}
      <Avatar src={avatar} width="30px" height="30px" />
      <div className="leader-info">
        <h3>{name}</h3>
      </div>
      <div className="leader-counter">
        <p>{quests} Quests</p>
        <img src={star} alt="medal" />
      </div>
    </div>
  )
}
