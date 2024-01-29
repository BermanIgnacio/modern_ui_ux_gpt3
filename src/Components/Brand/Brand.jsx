import React from 'react'
import "./Brand.css"
import { google, atlassian, dropbox, shopify, slack } from "./imports"


function Brand(){
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Logo Google" />
      </div>
      <div>
        <img src={slack} alt="Logo Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Logo aAlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Logo Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="Logo Shopify" />
      </div>
    </div>
  )
}

export default Brand