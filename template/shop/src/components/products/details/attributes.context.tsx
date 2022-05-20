import React from 'react';
type State = typeof initialState;
const initialState = {};
export const AttributesContext = React.createContext<State | any>(initialState);

AttributesContext.displayName = 'AttributesContext';

export const AttributesProvider: React.FC = (props) => {
  const [state, dispatch] = React.useState(initialState);
  const value = React.useMemo(
    () => ({ attributes: state, setAttributes: dispatch }),
    [state]
  );
  return <AttributesContext.Provider value={value} {...props} />;
};

export const useAttributes = () => {
  const context = React.useContext(AttributesContext);
  if (context === undefined) {
    throw new Error(`useAttributes must be used within a SettingsProvider`);
  }
  return context;
};
