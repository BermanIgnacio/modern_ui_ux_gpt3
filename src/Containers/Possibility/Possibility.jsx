import React from 'react'
import "./Possibility.css"
import possibillityImage from "../../assests/possibillityImage.png"

function Possibility(){
  return (
    <div className='gtp3__possibillity section__padding'>
      <div className='gtp3__possibillity-img'>
        <img src={possibillityImage} alt="possibillity" />
      </div>
      <div className='gtp3__possibillity-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h5>Request Early Access to Get Started</h5>
      </div>
    </div>
  )
}

export default Possibility