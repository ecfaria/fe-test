import { useEffect, useState } from "react";

export interface User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  managerId?: number;
  password: string;
  photo?: string;
}

export default function useFetchData() {
  const [data, setData] = useState<{ users?: User[] }>({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("https://gongfetest.firebaseio.com/.json");
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  console.log("entrou");

  return data;
}
