import React from 'react'
import Card from '../layouts/Card'

export default function RecentMessages() {
  return (
    <Card title="Recent Messages">
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
