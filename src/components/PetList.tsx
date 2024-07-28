import { useGlobalContext } from "../services/GlobalContextProvider.tsx";
import { useFetchList } from "../services/FetchData.tsx";
import Loading from "../components/Loading.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";
import NoData from "./NoData.tsx";
import Pagination from "./Pagination.tsx";
import { NavLink } from "react-router-dom";

function PetList() {
  const { dispatch } = useGlobalContext();
  const { isLoading, error, data } = useFetchList();
  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorBoundary message={error} />}
      {!isLoading &&
        !error &&
        (!data.numberOfResults ? (
          <NoData />
        ) : (
          <div className="relative flex h-fit w-full flex-wrap items-center justify-center gap-10">
            <h2 className="w-full text-center font-semibold italic tracking-widest">
              Pet List
            </h2>
            {data.pets.map((pet) => (
              <NavLink
                to={"/details"}
                className="flex h-80 w-80 items-center justify-center border-2 p-8 hover:bg-slate-100"
                key={pet.id}
                onClick={() => {
                  dispatch({ type: "setID", payload: pet.id });
                }}
              >
                <table className="w-full table-auto border-separate border-spacing-x-3 border-spacing-y-5 capitalize">
                  <tbody>
                    <tr>
                      <td className="font-bold">ID</td>
                      <td>{pet.id}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Animal</td>
                      <td>{pet.animal}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Breed</td>
                      <td>{pet.breed}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">City</td>
                      <td>{pet.city}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">State</td>
                      <td>{pet.state}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Name</td>
                      <td>{pet.name}</td>
                    </tr>
                  </tbody>
                </table>
              </NavLink>
            ))}
            <Pagination data={data} />
          </div>
        ))}
    </>
  );
}

export default PetList;
