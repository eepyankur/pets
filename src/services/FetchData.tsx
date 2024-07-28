import { useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalContextProvider.tsx";

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

export interface ListData {
  endIndex: number;
  hasNext: boolean;
  numberOfResults: number;
  pets: Pet[];
  startIndex: number;
}

export interface DetailsData {
  endIndex: number;
  hasNext: boolean;
  numberOfResults: number;
  pets: Pet[];
  startIndex: number;
}

interface BreedsData {
  animal: string;
  breeds: string[];
}

function useFetchList() {
  const { state } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ListData>({
    endIndex: 0,
    hasNext: false,
    numberOfResults: 0,
    pets: [],
    startIndex: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    setError("");
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await fetch(
          `http://pets-v2.dev-apis.com/pets?page=${state.page}&name=${state.name}&animal=${state.animal === "type" ? "" : state.animal}&breed=${state.breed === "breed" ? "" : state.breed}&location=${state.location}`,
          { signal: abortController.signal },
        );
        if (!response.ok)
          throw new Error("Something is wrong with list response");

        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [state.page, state.name, state.animal, state.breed, state.location]);
  return { isLoading, error, data };
}

function useFetchDetails() {
  const { state } = useGlobalContext();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<DetailsData>({
    endIndex: 0,
    hasNext: false,
    numberOfResults: 0,
    pets: [],
    startIndex: 0,
  });

  useEffect(() => {
    if (state.id === null) return;
    setIsLoading(true);
    setError("");
    (async () => {
      try {
        const response = await fetch(
          `http://pets-v2.dev-apis.com/pets?id=${state.id}`,
        );
        if (!response.ok)
          throw new Error("Something is wrong with details response");

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [state.id]);
  return { isLoading, error, data };
}

function useFetchBreeds() {
  const { state } = useGlobalContext();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<BreedsData>({
    animal: "",
    breeds: [],
  });

  useEffect(() => {
    if (state.animal === "type") return;
    setIsLoading(true);
    setError("");
    (async () => {
      try {
        const response = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${state.animal}`,
        );
        if (!response.ok)
          throw new Error("Something is wrong with breed response");

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [state.animal]);
  return { isLoading, error, data };
}

export { useFetchList, useFetchDetails, useFetchBreeds };
