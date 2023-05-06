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

  const [showCount, setShowCount] = useState(0);
  const [resArray, setResArray] = useState([]);

  const updateWorkoutObjRep = (keys, rep) => {
    let subStringed = `${keys}`;

    setWorkoutObjRep({ ...workoutObjRep, [subStringed]: rep });
  };

  const updateWorkoutObjSet = (keys, set) => {
    let subStringed = `${keys}`;

    setWorkoutObjSet({ ...workoutObjSet, [subStringed]: set });
  };

  const updateShowCount = () => {
    setShowCount(showCount + 1);
  };

  const updateResArray = () => {
    let res = [];
    for (const key in workoutObjSet) {
      if (key in workoutObjSet) {
        res.push(key);
      }
    }
    console.log(res);
    setResArray(res);
    console.log(resArray);
    return resArray;
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
        updateWorkoutObjSet,
        updateShowCount,
        updateResArray,
        resArray
      }}>
      {children}
    </GymFlowContext.Provider>
  );
}

GymFlowProvider.propTypes = {
  children: PropTypes.node
};
