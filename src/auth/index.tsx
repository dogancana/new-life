import React from "react";

interface State {
  loggedIn: boolean;
  user?: {
    name: string;
  };
}

export const useAuth = () => {
  const [state, setState] = React.useState<State>({
    loggedIn: false,
  });

  React.useEffect(() => {
    const t = setTimeout(() => {
      setState({
        loggedIn: true,
        user: {
          name: "Charlie",
        },
      });
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  return state;
};
