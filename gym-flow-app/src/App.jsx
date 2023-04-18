import '../src/assets/css/App.css';
import '../src/assets/css/home.css';
import '../src/assets/css/workouts.css';
import { Timer } from './pages/home/components/Timer';

import { WorkoutContainer } from './pages/home/components/WorkoutContainer';
import {
  FormattedLegs,
  FormattedChest,
  FormattedBB,
  FormattedAbs
} from './pages/home/workouts/Workouts';
import ResponsiveAppBar from './pages/home/components/Appbar';

function App() {
  return (
    <div className="App">
      <>
        <ResponsiveAppBar />
        <div className="main-body-content">
          <div className="workouts-container">
            <WorkoutContainer
              title="Chest & Triceps"
              id="chest-triceps"
              workouts={FormattedChest}
            />
            <WorkoutContainer title="Legs" id="legs" workouts={FormattedLegs} />
            <WorkoutContainer title="Back & Biceps" id="back-biceps" workouts={FormattedBB} />
            <WorkoutContainer title="Abs" id="abs" workouts={FormattedAbs} />
          </div>
          <Timer />
        </div>
      </>
    </div>
  );
}

export default App;
