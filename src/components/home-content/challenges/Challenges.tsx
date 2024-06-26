// Components
import Card from '../../layouts/Card'
import ChallengeCard from './ChallengeCard'

// ---------------------------------------------------------------
export default function Challenges() {
  const challenges = [
    {
      title: 'Save 30 companies to earn the Career Explorer Badge.',
      value: 50,
      rate: '15/30',
      emoji: '🧑‍🚀',
      style: {
        border: '1.5px solid rgba(235, 153, 62, 1)',
      },
      emojiStyle: {
        top: ' 6.9px',
        left: '7.21px',
      },
    },
    {
      title: 'Save 50 contacts to earn the Social Butterfly Badge.',
      value: 33,
      rate: '10/30',
      emoji: '🦋',
      style: {
        border: '1.5px solid rgba(44, 154, 207, 1)',
      },
      emojiStyle: {
        top: ' 7.5px',
        left: '7.5px',
      },
    },
    {
      title: 'Send 50 Linkedin invitations to earn the Networking Ninja Badge.',
      value: 40,
      rate: '12/30',
      emoji: '🥷',
      style: {
        border: '1.5px solid rgba(20, 29, 29, 1)',
      },
      emojiStyle: {
        top: ' 7.5px',
        left: '7.5px',
      },
    },
  ]
  return (
    <Card title="Challenges" width="862.5px" height="244px" gap>
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          title={challenge.title}
          value={challenge.value}
          emoji={challenge.emoji}
          rate={challenge.rate}
          style={challenge.style}
          emojiStyle={challenge.emojiStyle}
        />
      ))}
    </Card>
  )
}
