import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { encode } from "./LoginPage.helpers";

function LoginPage({ setUser }: { setUser: (userId: number | null) => void }) {
  const [userNotFound, setUserNotFound] = useState(false);

  const { secrets } = useFetchData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const parsedPassword = JSON.parse(JSON.stringify(password));

    const secret = encode(email, parsedPassword);

    const user = secrets[secret];

    if (!user) {
      setUserNotFound(true);
      return;
    }

    setUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-4 gap-6 font-inter">
      <h1 className="text-2xl text-primary font-extrabold text-center">
        Please login
      </h1>
      <div className="w-full max-w-md mx-auto p-6 border border-gray-300 rounded">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
            <label className="text-right inline-block">Email Address:</label>
            <input
              type="text"
              name="email"
              required
              className="border border-gray-300 rounded px-2 py-1"
              value="emily.jo@jily.net"
            />
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
            <label className="text-right">Password:</label>
            <input
              type="password"
              name="password"
              required
              className="border border-gray-300 rounded px-2 py-1"
              value="l\x[u>Nk"
            />
          </div>
          {userNotFound && (
            <div className="text-red-500 mb-4 text-center">User not found</div>
          )}
          <button
            type="submit"
            className="mt-4 bg-primary text-white px-4 py-2 rounded ml-auto"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
