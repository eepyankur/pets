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
    (async () => {
      try {
        const response = await fetch(
          `http://pets-v2.dev-apis.com/pets?page=${state.page}`,
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
  }, [state.page]);
  return { isLoading, error, data };
}

function useFetchDetails() {
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
    (async () => {
      try {
        const response = await fetch(
          `http://pets-v2.dev-apis.com/pets?id=${state.id}`,
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
  }, [state.page]);
  return { isLoading, error, data };
}

export { useFetchList, useFetchDetails };
