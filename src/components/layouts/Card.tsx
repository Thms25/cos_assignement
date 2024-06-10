import React from 'react'

// Styles
import '../../styles/Card.scss'

type CardProps = {
  children: React.ReactNode
  title: string
  width?: string
  height?: string
  icon?: string
}

export default function Card({
  children,
  title,
  width,
  height,
  icon,
}: CardProps) {
  return (
    <section
      className="card"
      // style={{
      //   width,
      //   height,
      // }}
    >
      <div className="title">
        <h4>{title}</h4>
        {icon && <img src={icon} alt={title} />}
      </div>
      {children}
    </section>
  )
}
