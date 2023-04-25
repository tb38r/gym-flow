import * as React from 'react';
import { createContext, useState } from 'react';

export const GymFlowContext = createContext();

export function GymFlowProvider({ children }) {
  const [legOpen, setLegOpen] = useState(false);
  const handleLegOpen = () => setLegOpen(true);
  const handleLegClose = () => setLegOpen(false);

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
        legOpen,
        handleLegOpen,
        handleLegClose,
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
