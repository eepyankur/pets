// Navigation bar
// Home return to homepage and resets all search filters
// Back closes the pet details and keeps search filters

import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../services/GlobalContextProvider.tsx";

export default function NavBar() {
  const { state, dispatch } = useGlobalContext();

  return (
    <nav className="flex h-fit w-full gap-5 font-semibold text-blue-700 underline underline-offset-8">
      <NavLink
        to={"/"}
        onClick={() => {
          dispatch({ type: "setID", payload: null });
          dispatch({ type: "setPage", payload: 0 });
          dispatch({ type: "setAnimal", payload: "type" });
          dispatch({ type: "setBreed", payload: "breed" });
          dispatch({ type: "setName", payload: "" });
          dispatch({ type: "setLocation", payload: "" });
        }}
      >
        home
      </NavLink>
      {state.id !== null && (
        <NavLink
          to={"/"}
          onClick={() => {
            dispatch({ type: "setID", payload: null });
          }}
        >
          back
        </NavLink>
      )}
    </nav>
  );
}
