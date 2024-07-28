// displays pet details

import { useFetchDetails } from "../services/FetchData.tsx";
import Loading from "./Loading.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";
import NoData from "./NoData.tsx";

export default function PetDetails() {
  const { isLoading, error, data } = useFetchDetails();
  return (
    <>
      {/*loading spinner*/}
      {isLoading && <Loading />}
      {/*displays error*/}
      {error && <ErrorBoundary message={error} />}
      {/*displays data*/}
      {!isLoading &&
        !error &&
        (!data.numberOfResults ? (
          // displays if data is empty
          <NoData />
        ) : (
          <div
            className="relative my-20 flex h-fit w-full flex-col gap-10"
            key={data.pets[0].id}
          >
            <h2 className="w-full text-center font-semibold capitalize italic tracking-widest">
              Pet Details
            </h2>
            <table className="w-full table-auto border-separate border-spacing-5 capitalize md:border-spacing-x-10">
              <tbody>
                <tr>
                  <td className="font-bold">ID</td>
                  <td>{data.pets[0].id}</td>
                </tr>
                <tr>
                  <td className="font-bold">Animal</td>
                  <td>{data.pets[0].animal}</td>
                </tr>
                <tr>
                  <td className="font-bold">Breed</td>
                  <td>{data.pets[0].breed}</td>
                </tr>
                <tr>
                  <td className="font-bold">Location</td>
                  <td>
                    {data.pets[0].city}, {data.pets[0].state}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Name</td>
                  <td>{data.pets[0].name}</td>
                </tr>
                <tr>
                  <td className="flex self-start font-bold">Description</td>
                  <td className={"text-balance normal-case"}>
                    {data.pets[0].description}
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 className="w-full text-center font-semibold italic tracking-widest">
              {data.pets[0].name}'s Images
            </h2>
            {/*pet images*/}
            <div className="flex h-fit w-full flex-wrap items-center justify-center gap-2">
              {data.pets[0].images.map((image, index) => (
                <a key={data.pets[0].name + index} href={image} target="_blank">
                  <img
                    src={image}
                    alt={data.pets[0].name + index}
                    className="aspect-square w-[500px] object-cover object-center transition-transform duration-100 ease-linear hover:scale-95"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}
