import '../src/assets/css/App.css';
import '../src/assets/css/home.css';
import '../src/assets/css/workouts.css';
import { Timer } from './pages/home/components/Timer';
import Button from '@mui/material/Button';

import { WorkoutContainer } from './pages/home/components/WorkoutContainer';
import {
  FormattedLegs,
  FormattedChest,
  FormattedBB,
  FormattedAbs
} from './pages/home/workouts/Workouts';
import ResponsiveAppBar from './pages/home/components/Appbar';
import { GymFlowProvider } from './context/flow-context';
import { AbsModal } from './pages/home/components/workoutmodals/Absmodal';

function App() {
  return (
    <div className="App">
      <>
        <GymFlowProvider>
          <ResponsiveAppBar />
          <div className="main-body-content">
            <div className="workouts-container">
              <WorkoutContainer
                title="Chest & Triceps"
                id="chest-triceps"
                workouts={FormattedChest}
              />
              <WorkoutContainer
                title="Legs"
                id="legs"
                workouts={FormattedLegs}
                modal={<AbsModal />}
              />
              <WorkoutContainer title="Back & Biceps" id="back-biceps" workouts={FormattedBB} />
              <WorkoutContainer title="Abs" id="abs" workouts={FormattedAbs} />
            </div>
            <Timer />
            <Button
              onClick={() => {
                console.log('onClick');
              }}
              variant="contained">
              GO!
            </Button>
          </div>
        </GymFlowProvider>
      </>
    </div>
  );
}

export default App;
