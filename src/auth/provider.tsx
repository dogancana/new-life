import React from "react";
import { AuthHookResult, useAuth } from "./hook";

const authContext = React.createContext<AuthHookResult>(null as any);

export function useAuthContext() {
  return React.useContext(authContext);
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const v = useAuth();

  if (!v) return null;
  return <authContext.Provider value={v}>{children}</authContext.Provider>;
};
