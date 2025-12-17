import { useEffect, useState } from "react";

export type User = {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  managerId?: number;
  password: string;
  photo?: string;
};

export type Secrets = Record<string, number>;

const DATA_URL = "https://gongfetest.firebaseio.com/.json";

export default function useFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{ users: User[]; secrets: Secrets }>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(DATA_URL);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return { ...data, isLoading };
}
