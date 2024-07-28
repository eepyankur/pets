import { useGlobalContext } from "../services/GlobalContextProvider.tsx";
import { useFetchBreeds } from "../services/FetchData.tsx";

export default function SearchForm() {
  const { state, dispatch } = useGlobalContext();
  const { data } = useFetchBreeds();

  return (
    <form className="mb-20 mt-10 flex h-fit w-full flex-col items-center justify-center gap-5 rounded-none border-2 p-2 md:flex-row md:gap-10">
      <div className={"relative flex h-full w-full"}>
        <input
          type="text"
          className={"h-fit w-full focus:outline-0"}
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
      <div className={"relative flex h-full w-full"}>
        <input
          type="text"
          className={"h-full w-full focus:outline-0"}
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
      <div className={"relative flex h-full w-full"}>
        <select
          className={"h-full w-full focus:outline-0"}
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
            Type
          </option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
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
      <div className={"relative flex h-full w-full"}>
        <select
          className={"h-full w-full focus:outline-0"}
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
            Breed
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
    </form>
  );
}
