"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import { Github, LogInIcon, Twitter } from "lucide-react";
import { Button } from "./ui/button";
const Nav = () => {
  return (
    <>
      <main className="flex flex-col items-center gap-5 justify-between p-4 sm:flex-row sm:items-start sm:justify-between ">
        <div className="flex gap-2">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <span className="font-bold ">Next-Auth</span>
        </div>

        <div className="flex gap-3 items-center justify-center">
          <ul className="flex gap-4">
            <li>
              <Link href="/login">
                <Button>
                  Login
                  <LogInIcon className="h-4 w-4 m-3" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <Button>
                  Register
                  <LogInIcon className="h-4 w-4 m-3" />
                </Button>
              </Link>
            </li>
          </ul>
          <Link href="https://github.com/s-biwas" target="_blank">
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </Link>
          <Link href="https://twitter.com/biwas2059" target="_blank">
            <Twitter className="h-[1.2rem] w-[1.2rem] " />
          </Link>
          <ModeToggle />
        </div>
      </main>
    </>
  );
};
export default Nav;
