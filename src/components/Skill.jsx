import React from 'react'
// import Skill from './Data/skills.json'
// import Skills from './Data/skills.json'
// import Skills from '/assets/skill.skills/javascript.png.'
import Skills from './Data/skills.json'

const Skill = () => {
  return (
   <>
    <div className='container skills'>

      <h1>
        SKILLS
      </h1>
      <div className="items" >
      {/* {Skills.map((data) => ( */}
        {Skills.map((data, idx) => (

        //
        <>
          <div className="item" key={idx}>
{/* <img src={`./assets/${data.imageSrc}`} alt="skill " /> */}
<img src={`/assets/${data.imageSrc}`} alt={data.title} />

          
            <h3>{data.title}</h3>
          </div>
        </>
      )
    )}
      </div>
      
    </div>
    </>
  )
}

export default Skill
