import Image from 'next/image'
import React from 'react'

import "./CardEvents.scss"

export default function CardEvents() {
  const testImage = "/test.png"
  return (
    <div className='cardEvents'>
      <Image src={testImage} width={250} height={200} />
      <p className="date">21.02.2025</p>
      <h1 className="title">Lorem, ipsum dolor.</h1>
    </div>
  )
}
