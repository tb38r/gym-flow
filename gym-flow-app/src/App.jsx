import '../src/assets/css/App.css'
import '../src/assets/css/home.css'
import { WorkoutContainer } from './pages/home/components/WorkoutContainer'

import ResponsiveAppBar from './pages/home/components/Appbar'

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div className="main-body-content">
        <div className="workouts-container">

<WorkoutContainer title= "Chest & Triceps" id="chest-triceps"/>
<WorkoutContainer title= "Legs" id="legs"/>
<WorkoutContainer title= "Back & Biceps" id="back-biceps"/>
<WorkoutContainer title= "Abs" id="abs"/>


        </div>



      </div>
    </div>
  )
}

export default App
