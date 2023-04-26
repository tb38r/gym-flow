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
        handleAbsClose
      }}>
      {children}
    </GymFlowContext.Provider>
  );
}

GymFlowProvider.propTypes = {
  children: PropTypes.node
};
