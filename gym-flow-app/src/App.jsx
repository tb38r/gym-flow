import { useState } from 'react'
import './App.css'
import Demo from './demo'
import SearchAppBar from './Appbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SearchAppBar/>
     <Demo/>
    </div>
  )
}

export default App
