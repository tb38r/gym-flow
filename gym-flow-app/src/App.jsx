import { useState } from 'react'
import '../src/assets/css/App.css'
import '../src/assets/css/home.css'

import ResponsiveAppBar from './pages/home/components/Appbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div className="main-body-content">
        <div className="workouts-container">

<div className="tester">hi</div>
        <div className="tes">hi</div>
<div className="tes">hi</div>
<div className="tester">hi</div>


        </div>



      </div>
    </div>
  )
}

export default App
