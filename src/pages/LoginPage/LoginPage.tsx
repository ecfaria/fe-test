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

    // const parsedPassword = JSON.parse(JSON.stringify(password));

    const secret = encode(email, password);

    const user = secrets[secret];

    if (!user) {
      setUserNotFound(true);
      return;
    }

    setUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-4 gap-6 font-inter bg-violet-950">
      <h1 className="text-4xl text-white font-extrabold text-center uppercase">
        Please login
      </h1>
      <div className="w-full max-w-md mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center"
        >
          <input
            type="email"
            name="email"
            required
            className="border border-gray-300 rounded-full px-2 py-1 bg-purple-200 focus:bg-white h-10 transition-all"
            placeholder="Email Address"
            value="emily.jo@jily.net"
          />
          <input
            type="password"
            name="password"
            required
            className="border border-gray-300 rounded-full px-2 py-1 bg-purple-200 focus:bg-white h-10 transition-all"
            placeholder="Password"
            value="l\x[u>Nk"
          />
          {userNotFound && (
            <div className="text-red-500 mb-4 text-center">User not found</div>
          )}
          <button
            type="submit"
            className="mt-4 bg-pink-500 text-white font-semibold px-4 py-2 rounded-full mx-auto"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
