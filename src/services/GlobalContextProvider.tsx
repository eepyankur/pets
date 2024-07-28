import React, { createContext, useContext, useReducer } from "react";

interface GlobalContextState {
  page: number;
  id: number | null;
  animal: string;
  breed: string;
  location: string;
  name: string;
}

type GlobalContextAction =
  | { type: "setPage"; payload: number }
  | { type: "setID"; payload: number | null }
  | { type: "setAnimal"; payload: string }
  | { type: "setBreed"; payload: string }
  | { type: "setLocation"; payload: string }
  | { type: "setName"; payload: string };

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
        case "setAnimal":
          return { ...prevState, animal: action.payload };
        case "setBreed":
          return { ...prevState, breed: action.payload };
        case "setLocation":
          return { ...prevState, location: action.payload };
        case "setName":
          return { ...prevState, name: action.payload };
        default:
          return prevState;
      }
    },
    {
      page: 0,
      id: null,
      animal: "type",
      breed: "breed",
      location: "",
      name: "",
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
  if (context === null) throw new Error("Global context is undefined");

  return context;
}

export { GlobalContextProvider, useGlobalContext };
