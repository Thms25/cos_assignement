// Styles
import '../../../styles/Challenges.scss'

type ChallengeCardProps = {
  title: string
  value: number
  emoji: React.ReactNode
  rate: string
  style?: React.CSSProperties
  emojiStyle?: React.CSSProperties
}

export default function ChallengeCard({
  title,
  value,
  emoji,
  rate,
  style,
  emojiStyle,
}: ChallengeCardProps) {
  return (
    <div className="challenge-card">
      <div style={style} className="challenge-emoji">
        <p style={emojiStyle}>{emoji}</p>
      </div>
      <div className="challenge-info">
        <h4>{title}</h4>
        <div className="challenge-progress">
          <progress value={value} max="100"></progress>
          <span>{rate}</span>
        </div>
      </div>
    </div>
  )
}
