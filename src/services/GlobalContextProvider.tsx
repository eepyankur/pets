import React, { createContext, useContext, useReducer } from "react";

interface GlobalContextState {
  page: number;
  id: number;
}

type GlobalContextAction =
  | { type: "setPage"; payload: number }
  | { type: "setID"; payload: number };

interface GlobalContextType {
  state: GlobalContextState;
  // prettier-ignore
  dispatch: React.Dispatch<GlobalContextAction>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    (prevState: GlobalContextState, action: GlobalContextAction) => {
      switch (action.type) {
        case "setPage":
          return { ...prevState, page: action.payload };
        case "setID":
          return { ...prevState, id: action.payload };
        default:
          return prevState;
      }
    },
    {
      page: 0,
      id: 0,
    },
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === null) {
    throw new Error("Global context is undefined");
  }
  return context;
}

export { GlobalContextProvider, useGlobalContext };
