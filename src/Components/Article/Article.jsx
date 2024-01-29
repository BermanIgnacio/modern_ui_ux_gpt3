import React from 'react'
import "./Article.css"

function Article({imgURL,title,date}){
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-img'>
        <img src={imgURL} alt="blog img" />
      </div>
      <div className='gpt3__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article