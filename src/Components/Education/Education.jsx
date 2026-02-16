import React from 'react'
import './Education.css'
import Timeline from '../Timeline/Timeline'

const Education = () => {
  return (
    <div id='education' className='aboutme'>
         
      <div className="aboutme-title">
        <h1>Education and Academic Background</h1>
      </div>
      <div className="timeline">
         <Timeline/>
      </div>

       
    </div>
  )
}

export default Education