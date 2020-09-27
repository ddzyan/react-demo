import React from 'react';
import mitt from 'mitt';

export const BusContext = React.createContext(null);

export default function useBus() {
  return React.useContext(BusContext);
}
