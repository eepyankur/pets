import { useEffect, useState } from "react";
import Loading from "../components/Loading.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";
import NoData from "./NoData.tsx";

interface Pet {
  animal: string;
  breed: string;
  city: string;
  description: string;
  id: number;
  images: string[];
  name: string;
  state: string;
}

interface Data {
  endIndex: number;
  hasNext: boolean;
  numberOfResults: number;
  pets: Pet[];
  startIndex: number;
}

function PetList() {
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Data>({
    endIndex: 0,
    hasNext: false,
    numberOfResults: 0,
    pets: [],
    startIndex: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    setError("");
    (async () => {
      try {
        const response = await fetch(
          `http://pets-v2.dev-apis.com/pets?page=${page}`,
        );
        if (!response.ok) throw new Error("Something is wrong with response");

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorBoundary message={error} />}
      {!isLoading &&
        !error &&
        (!data.numberOfResults ? (
          <NoData />
        ) : (
          <div className={"relative flex h-fit w-full flex-col gap-5"}>
            {data.pets.map((pet) => (
              <div
                className={"flex h-fit w-full flex-col gap-5 border-2 p-4"}
                key={pet.id}
              >
                <h2 className="w-full text-center font-semibold italic tracking-widest">
                  Pet Details
                </h2>
                <div className={"flex flex-col gap-2 text-balance capitalize"}>
                  <p>
                    <span className="font-bold">ID:</span> {pet.id}
                  </p>
                  <p>
                    <span className="font-bold">Animal:</span> {pet.animal}
                  </p>
                  <p>
                    <span className="font-bold">Breed:</span> {pet.breed}
                  </p>

                  <p>
                    <span className="font-bold">City:</span> {pet.city}
                  </p>
                  <p>
                    <span className="font-bold">State:</span> {pet.state}
                  </p>
                  <p>
                    <span className="font-bold">Name:</span> {pet.name}
                  </p>
                  <p>
                    <span className="font-bold">Description:</span>{" "}
                    {pet.description}
                  </p>
                </div>
                <h2 className="w-full text-center font-semibold italic tracking-widest">
                  {pet.name}'s Images
                </h2>
                <div className={"flex items-center justify-center gap-2"}>
                  {pet.images.map((image, index) => (
                    <a key={pet.name + index} href={image} target="_blank">
                      <img
                        src={image}
                        alt={pet.name + index}
                        className="aspect-square h-32 rounded-lg object-cover object-center transition-transform duration-100 ease-linear hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className={"relative flex justify-center p-10"}>
              {data.startIndex !== 0 && (
                <button
                  className={
                    "absolute left-10 h-fit w-fit text-blue-500 underline-offset-4 hover:underline"
                  }
                  onClick={() => {
                    setPage((page) => page - 1);
                  }}
                >
                  previous
                </button>
              )}
              <p>{page + 1}</p>
              {data.hasNext && (
                <button
                  className={
                    "absolute right-10 h-fit w-fit text-blue-500 underline-offset-4 hover:underline"
                  }
                  onClick={() => {
                    setPage((page) => page + 1);
                  }}
                >
                  next
                </button>
              )}
            </div>
          </div>
        ))}
    </>
  );
}

export default PetList;
