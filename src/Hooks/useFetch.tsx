import { useEffect, useState } from "react";

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE";

export const useFetch = <T,>(
  url: string,
  method: HttpMethod = "GET",
  token?: string | null,
  delay = 0,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, delay));

        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });

        if (!response.ok)
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);

        const result: T = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, token, delay]);
  return { data, isLoading, error };
};
