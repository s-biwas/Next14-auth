"use client";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!username || !email || !password) {
      setError("Fileds cannot be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email Format Incorrect");
      return;
    }
    if (password.length < 6) {
      setError("Password should be more than 7 characters");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This Email is already Taken");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error");
      console.log("Error");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[90vh] ">
        <div className="flex flex-col gap-2 bg-primary-foreground rounded-lg p-10 shadow-[black] shadow-lg">
          <h1 className="text-2xl text-center m-4">SignUp</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="myUsername">Username</label>
            <input
              id="myUsername"
              type="text"
              placeholder="username..."
              className="p-2 rounded"
            />
            <label htmlFor="myEmail">Email</label>
            <input
              type="email"
              id="myEmail"
              placeholder="username@gmail.com"
              className="p-2 rounded"
            />
            <label htmlFor="myPassword">Password</label>
            <input
              type="password"
              id="myPassword"
              placeholder="password..."
              className="p-2 rounded"
            />
            <Button type="submit" className="mt-4">
              Sign Up <LogInIcon className="h-4 " />
            </Button>
            <p className="text-center p-2 text-red-500">{error && error}</p>
          </form>
          <hr />
          <div>
            <p>
              Already have an account?{" "}
              <span className="text-blue-500">
                <Link href="/login">Login here!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
