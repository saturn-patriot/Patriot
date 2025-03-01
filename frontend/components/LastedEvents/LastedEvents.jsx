import React from 'react'

import "./LastedEvents.scss"
import CardEvents from '../CardEvents/CardEvents'

export default function LastedEvents() {
  return (
    <div className='lastedEvents'>
        <h1 className="title">Последние события</h1>
        <div className="eventsList">
          <CardEvents />
        </div>
    </div>
  )
}
