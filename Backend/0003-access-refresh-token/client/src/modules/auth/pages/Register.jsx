import React from "react";
import useApi from "../../shared/useApi";
import { useAuthContext } from "../context/useAuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const api = useApi();
  const  authContext  = useAuthContext();

  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    console.log("Registration successful:", response.data);


    authContext.setAccessToken(response.data.accessToken);
    authContext.setUser(response.data.data.user);

    navigate("/profile");
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <form
        className="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="text-sm text-slate-500">
            Enter your details to get started.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a secure password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:bg-blue-800"
          type="submit"
        >
          Create account
        </button>
      </form>
    </main>
  );
};

export default Register;
