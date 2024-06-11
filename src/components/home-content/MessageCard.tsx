// Styles
import '../../styles/MessageCard.scss'

// Assets
import Reply from '../../assets/svg/recent/Reply.svg'

type messageObject = {
  name?: any
  job?: any
  message?: any
  date?: any
  image?: any
  logo?: any
}

// ----------------------------------------------------------

export default function MessageCard({ message }: messageObject) {
  return (
    <div className="message-card">
      <div className="message-avatar">
        <img src={message.image} alt="Profile" id="message-image" />
        <img src={message.logo} alt="Logo" id="message-logo" />
      </div>

      <div className="message-body">
        <div className="message-top">
          <div className="message-header">
            <h3>{message.name}</h3>
            <p>{message.date}</p>
          </div>

          <div className="message-reply">
            <img src={Reply} alt="Logo" />
            <p>Reply</p>
          </div>
        </div>

        <p className="message-job">{message.job}</p>
        <p className="message-content">{message.message}</p>
      </div>
    </div>
  )
}
