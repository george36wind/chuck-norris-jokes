import React from 'react'
import './jokeBox.css'

export const JokeBox = ( props ) => {

  return (
    <div className='mainDiv'>
        <h2>Chuck Norris Fact</h2>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHTr-tPosRDiIw4gRYoM1uwypz9G1iLPDumW02bSPaw&s' className='image'/>
        <p className='jokes'>{props.jokes}</p>
    </div>
  )
}
