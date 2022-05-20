import React, { useMemo } from "react";
export interface State {
  settings: any;
}

const initialState = {
  siteTitle: "PickBazar",
  siteSubtitle: "",
  currency: "USD",
  logo: {
    id: 1,
    thumbnail: "/logo.svg",
    original: "/logo.svg",
  },
};

export const SettingsContext = React.createContext<State | any>(initialState);

SettingsContext.displayName = "SettingsContext";

export const SettingsProvider: React.FC<{ initialValue: any }> = ({
  initialValue,
  ...props
}) => {
  const [state, updateSettings] = React.useState(initialValue ?? initialState);
  const value = useMemo(
    () => ({
      ...state,
      updateSettings,
    }),
    [state]
  );
  return <SettingsContext.Provider value={value} {...props} />;
};

export const useSettings = () => {
  const context = React.useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(`useSettings must be used within a SettingsProvider`);
  }
  return context;
};
