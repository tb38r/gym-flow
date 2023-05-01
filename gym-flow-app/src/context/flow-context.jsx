import * as React from 'react';
import PropTypes from 'prop-types';

import { createContext, useState } from 'react';

export const GymFlowContext = createContext();

export function GymFlowProvider({ children }) {
  const [legsOpen, setLegsOpen] = useState(false);
  const handleLegsOpen = () => setLegsOpen(true);
  const handleLegsClose = () => setLegsOpen(false);

  const [chestOpen, setChestOpen] = useState(false);
  const handleChestOpen = () => setChestOpen(true);
  const handleChestClose = () => setChestOpen(false);

  const [backOpen, setBackOpen] = useState(false);
  const handleBackOpen = () => setBackOpen(true);
  const handleBackClose = () => setBackOpen(false);

  const [absOpen, setAbsOpen] = useState(false);
  const handleAbsOpen = () => setAbsOpen(true);
  const handleAbsClose = () => setAbsOpen(false);

  const [workoutObjRep, setWorkoutObjRep] = useState({});
  const [workoutObjSet, setWorkoutObjSet] = useState({});

  const updateWorkoutObjRep = (keys, rep) => {
    let subStringed = `${keys}`;
    console.log('PRE --->', 'test', keys, rep);
    // if (!Object.hasOwn(workoutObjRep, `${keys}`)) {
    //   console.log('INONE', `${keys}`);
    //   setWorkoutObjRep({ [subStringed]: rep });
    //   console.log('WORONE --->', workoutObjRep);
    // } else {
    //   console.log('INTWO');
    // }
    function Tester() {
      console.log('too soon');
      console.log(workoutObjRep);
    }
    setWorkoutObjRep({ ...workoutObjRep, [subStringed]: rep });
    setTimeout(Tester, 2000);
    //console.log('WOR --->', workoutObjRep);
  };

  const updateWorkoutObjSet = (key, set) => {
    setWorkoutObjSet((workoutObjSet[key] = set));
    console.log('WOS--->', workoutObjSet);
  };

  return (
    <GymFlowContext.Provider
      value={{
        legsOpen,
        handleLegsOpen,
        handleLegsClose,
        chestOpen,
        handleChestOpen,
        handleChestClose,
        backOpen,
        handleBackOpen,
        handleBackClose,
        absOpen,
        handleAbsOpen,
        handleAbsClose,
        workoutObjRep,
        updateWorkoutObjRep,
        workoutObjSet,
        updateWorkoutObjSet
      }}>
      {children}
    </GymFlowContext.Provider>
  );
}

GymFlowProvider.propTypes = {
  children: PropTypes.node
};
