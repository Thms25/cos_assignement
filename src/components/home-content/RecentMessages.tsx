import React from 'react'

// Components
import Card from '../layouts/Card'

// Assets
import Info from '../../assets/svg/Info.svg'

// ----------------------------------------------------------

export default function RecentMessages() {
  return (
    <Card title="Recent Messages" width="862.5px" height="395px" icon={Info}>
      <div>
        <div className="message">
          <div className="message__user">John Doe</div>
          <div className="message__content">Hey, how are you?</div>
        </div>
        <div className="message">
          <div className="message__user">Jane Doe</div>
          <div className="message__content">I'm good, you?</div>
        </div>
      </div>
    </Card>
  )
}
