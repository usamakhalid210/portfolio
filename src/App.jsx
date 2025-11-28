import { useState } from 'react'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skill from './components/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navbar/>
<div className="container">
<Home/>
<Experience/>
<Skill/>
</div>

    </>
  )
}

export default App
