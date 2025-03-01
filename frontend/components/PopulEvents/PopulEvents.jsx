import React from 'react'

import "./PopulEvents.scss"
import CardPopulEvents from '../CardPopulEvents/CardPopulEvents'

export default function PopulEvents() {
  return (
    <div className='populEvents'>
        <h1 className='title'>Популярные события</h1>
        <div className="populList">
        <CardPopulEvents /><CardPopulEvents /><CardPopulEvents /><CardPopulEvents />
        </div>
    </div>
  )
}
