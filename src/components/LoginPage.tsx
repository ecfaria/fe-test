import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { encode } from "./LoginPage.helpers";

function LoginPage({ setUser }: { setUser: (userId: string) => void }) {
  const [userNotFound, setUserNotFound] = useState(false);

  const { secrets } = useFetchData();

  const handleSubmit = (e) => {
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
    <div className="max-w-md mx-auto mt-20 p-6 border border-gray-300 rounded">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4 gap-2">
          <label>
            Email Adress:
            <input
              type="text"
              name="email"
              required
              className="border border-gray-300 rounded px-2 py-1 w-"
              value="emily.jo@jily.net"
            />
          </label>
        </div>
        <div className="flex justify-center mb-4 gap-2">
          <label>
            Password:
            <input
              type="password"
              name="password"
              required
              className="border border-gray-300 rounded px-2 py-1"
              value="l\x[u>Nk"
            />
          </label>
        </div>
        {userNotFound && (
          <div className="text-red-500 mb-4 text-center">User not found</div>
        )}
        <button
          type="submit"
          className="mt-4 bg-primary text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
