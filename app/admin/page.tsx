import Fetch from "@/components/Fetch";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>You are not advised to enter this page!<Link href={"/"} className="text-red-500"> Back Home</Link> or <Link href={"/api/auth/signin"} className="text-blue-500"> Sign In</Link></p>
      </div>
    );
  }

  if (session.user?.email !== "whatplusplustudio@gmail.com") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>If you are not an administrator, you are prohibited from entering this page!<Link href={"/"} className="text-red-500"> Back Home</Link> or  <Link href={"/api/auth/signin"} className="text-blue-500">Sign In</Link></p>
      </div>
    );
  }

  return (
    <>
    <div className="flex mx-8 mt-8">
      <Link
        href={"/api/auth/signout"}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Sign Out
      </Link>
      <Link
        href={"/"}
        className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
      >
        Back to Home
      </Link>
    </div>
      <Fetch />
    </>
  );
};

export default Page;
