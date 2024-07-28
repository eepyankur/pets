// pagination for pet list to handle large datasets

import { useGlobalContext } from "../services/GlobalContextProvider.tsx";
import { ListData } from "../services/FetchData.tsx";

export default function Pagination({ data }: { data: ListData }) {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className={"relative flex h-fit w-full justify-evenly p-10"}>
      <button
        className={`${data.startIndex == 0 && "invisible"} h-fit w-fit text-xl text-blue-500 underline-offset-4 hover:underline`}
        onClick={() => {
          dispatch({ type: "setPage", payload: state.page - 1 });
        }}
      >
        &lt;
      </button>
      <p>{state.page + 1}</p>
      <button
        className={`${!data.hasNext && "invisible"} h-fit w-fit text-xl text-blue-500 underline-offset-4 hover:underline`}
        onClick={() => {
          dispatch({ type: "setPage", payload: state.page + 1 });
        }}
      >
        &gt;
      </button>
    </div>
  );
}
