// Search bar (name/location) + filter(type/breed)
// Each field has custom clear button

import { useGlobalContext } from "../services/GlobalContextProvider.tsx";
import { useFetchBreeds } from "../services/FetchData.tsx";

export default function SearchForm() {
  const { state, dispatch } = useGlobalContext();
  const { data } = useFetchBreeds();

  return (
    <div className="mb-20 mt-10 flex h-fit w-full flex-col items-center justify-center gap-5 border-2 p-2 md:flex-row md:gap-10">
      {/*name*/}
      <div className={"relative w-full"}>
        <input
          type="text"
          className={"h-fit w-full pl-1 focus:outline-0"}
          name="name"
          placeholder={"Name"}
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
        />
        {state.name !== "" && (
          <button
            className={"absolute right-5 aspect-square h-full text-red-600"}
            onClick={() => {
              dispatch({ type: "setName", payload: "" });
            }}
          >
            x
          </button>
        )}
      </div>
      {/*location*/}
      <div className={"relative w-full"}>
        <input
          type="text"
          className={"h-fit w-full pl-1 focus:outline-0"}
          name="location"
          placeholder={"Location"}
          value={state.location}
          onChange={(e) =>
            dispatch({ type: "setLocation", payload: e.target.value })
          }
        />
        {state.location !== "" && (
          <button
            className={"absolute right-5 aspect-square h-full text-red-600"}
            onClick={() => {
              dispatch({ type: "setLocation", payload: "" });
            }}
          >
            x
          </button>
        )}
      </div>
      {/*type*/}
      <div className={"relative w-full"}>
        <select
          className={"h-fit w-full focus:outline-0"}
          name="type"
          id="type"
          value={state.animal}
          onChange={(e) => {
            dispatch({ type: "setPage", payload: 0 });
            dispatch({ type: "setAnimal", payload: e.target.value });
            dispatch({ type: "setBreed", payload: "breed" });
          }}
        >
          <option value="type" disabled>
            Select Type
          </option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="reptile">Reptile</option>
          <option value="rabbit">Rabbit</option>
        </select>
        {state.animal !== "type" && (
          <button
            className={"absolute right-5 aspect-square h-full text-red-600"}
            onClick={() => {
              dispatch({ type: "setPage", payload: 0 });
              dispatch({ type: "setAnimal", payload: "type" });
              dispatch({ type: "setBreed", payload: "breed" });
            }}
          >
            x
          </button>
        )}
      </div>
      {/*breed*/}
      <div className={"relative w-full"}>
        <select
          className={"h-fit w-full focus:outline-0 disabled:text-red-300"}
          name="breed"
          id="breed"
          value={state.breed}
          disabled={state.animal === "type"}
          onChange={(e) => {
            dispatch({ type: "setPage", payload: 0 });
            dispatch({ type: "setBreed", payload: e.target.value });
          }}
        >
          <option value="breed" disabled>
            Select Breed
          </option>
          {data.breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        {state.breed !== "breed" && (
          <button
            className={"absolute right-5 aspect-square h-full text-red-600"}
            onClick={() => {
              dispatch({ type: "setPage", payload: 0 });
              dispatch({ type: "setBreed", payload: "breed" });
            }}
          >
            x
          </button>
        )}
      </div>
    </div>
  );
}
