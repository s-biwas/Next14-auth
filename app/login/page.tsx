import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[90vh] ">
        <div className="flex flex-col gap-2 rounded-lg p-10 bg-primary-foreground shadow-lg shadow-black">
          <h1 className="text-2xl text-center m-4">Login</h1>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="username@gmail.com"
            className="p-2 rounded"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password..."
            className="p-2 rounded"
          />
          <Button type="submit" className="mt-4">
            Login <LogInIcon className="h-4 " />
          </Button>
          <hr />
          <div>
            <p>
              Don't have an account?{" "}
              <span className="text-blue-500">
                <Link href="/signup">SignUp here!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
