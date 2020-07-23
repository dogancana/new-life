import React from "react";

interface State {
  authenticating: boolean;
  loggedIn: boolean;
  user?: {
    name: string;
  };
}

export interface AuthHookResult extends State {
  authenticate(): void;
}

export const useAuth = (): AuthHookResult => {
  const [state, setState] = React.useState<State>({
    loggedIn: false,
    authenticating: false,
  });

  return {
    ...state,
    authenticate,
  };

  function authenticate() {
    if (state.loggedIn) return;

    setState((p) => ({ ...p, authenticating: true }));
    setTimeout(() => {
      setState((p) => ({
        ...p,
        authenticating: false,
        loggedIn: true,
        user: {
          name: "Charlie",
        },
      }));
    }, 1500);
  }
};
