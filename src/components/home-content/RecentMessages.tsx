// Components
import Card from '../layouts/Card'

// Assets
import Info from '../../assets/svg/Info.svg'

// Styles
import '../../styles/MessageCard.scss'

// Mock Data
import { messages } from '../../utils/data/messages'
import MessageCard from './MessageCard'

// ----------------------------------------------------------

export default function RecentMessages() {
  return (
    <Card
      title="Recent Messages"
      width="862.5px"
      height="471px"
      contentHeight="395px"
      icon={Info}
    >
      <div className="messages-container">
        {messages.map((message, index) => (
          <MessageCard message={message} key={index} />
        ))}
      </div>
    </Card>
  )
}
