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
import { AbsModal } from './pages/home/components/workoutmodals/AbsModal';
import { BackModal } from './pages/home/components/workoutmodals/BackModal';
import { ChestModal } from './pages/home/components/workoutmodals/ChestModal';
import { LegsModal } from './pages/home/components/workoutmodals/LegsModal';

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
                chestmodal={<ChestModal />}
              />
              <WorkoutContainer
                title="Legs"
                id="legs"
                workouts={FormattedLegs}
                legsmodal={<LegsModal />}
              />
              <WorkoutContainer
                title="Back & Biceps"
                id="back-biceps"
                workouts={FormattedBB}
                backmodal={<BackModal />}
              />
              <WorkoutContainer
                title="Abs"
                id="abs"
                workouts={FormattedAbs}
                absmodal={<AbsModal />}
              />
            </div>
            <Timer />
            <Button
              size="large"
              sx={{
                fontWeight: 900,
                fontSize: 18
              }}
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
