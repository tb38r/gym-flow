import { useState } from 'react'
import './App.css'
import SearchAppBar from './Appbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SearchAppBar/>
    </div>
  )
}

export default App
