import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './Data/hero.json'

const Home = () => {
  return (
  <>
  <div className="container home">
    <div className="left">
      <h1>Lorem ipsum consectetur adipisicing doloremque?</h1>
      <a href={pdf} download="resume.pdf" className="btn btn-outline-warning">Download resume</a>
    </div>
    <div className="right">
      <div className="img">
        <img src={`/assets/${hero.imgSrc}`} alt="hero" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
