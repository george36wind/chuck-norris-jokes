import React, { useEffect, useState } from 'react'
import { JokeBox } from '../components/JokeBox'
import './home.css'

function Home() {
    const defaultJoke= 'Joke loading...'
    const [joke, setJoke] = useState(defaultJoke)
    const [num , setNum] = useState(0)

    function numClick(e){
      setNum(num+1)
    }

    useEffect(()=>{
        fetch(`https://api.chucknorris.io/jokes/random`)
            .then(res => res.json())
            .then((data)=>{
                setJoke(data.value)
            })
            .catch(error =>{
              console.log(error)
              setJoke(defaultJoke)
            })
    },[num])


  return (
    <div>
      <JokeBox jokes={joke} />
      <div className="div">
        <button className='button' onClick={numClick}>
          Next Fact
        </button>
      </div>
    </div>
  )
}

export default Home