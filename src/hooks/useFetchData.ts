import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

// This would ideally be in an environment variable
const DATA_URL = import.meta.env.VITE_API_URL || "";

export default function useFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{ users: User[]; secrets: Secrets }>();
  const errorNotification = () => toast.error("Failed to fetch data");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(DATA_URL);
        const data = await res.json();
        setData(data);
      } catch (err) {
        errorNotification();
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return { ...data, isLoading };
}
