import React from "react";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="flex justify-center items-center h-[100px] border border-gray-300 fixed w-full z-20 top-0 start-0 bg-white">
        <p className="font-semibold text-xl">
          + + <span className="text-[16px] tracking-widest">Studio</span>
        </p>
      </div>

      <section className="mt-[130px]">
        <div className="mx-4 lg:mx-[50px]">
          <Link
            href={"/"}
            className="underline underline-offset-4 text-sm hover:font-medium"
          >
            Back to home
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <div className="mx-4 lg:mx-[50px]">
          <p className="text-4xl font-medium">CodePlus Website</p>
          <div className="flex flex-col sm:flex-row sm:gap-6">
            <Link href={"https://codeplus-six.vercel.app/"}>
              <p className="w-[200px] text-center mt-4 px-10 py-2 text-xs text-white bg-black rounded-full">
                Open Live Site
              </p>
            </Link>
            <Link href={"/order"}>
              <p className="w-[300px] text-center mt-4 px-10 py-2 text-xs text-white bg-black rounded-full">
                Order This Website
              </p>
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-justify leading-8">
              CodePlus is a programming course platform that aims to help you
              enter the world of technology with confidence. With a structured
              curriculum and expert instructors, we offer programming courses
              from basic to advanced level. Discover the fun of learning
              programming and make your technology dreams come true at CodePlus.
            </p>
          </div>
          <div className="mt-6">
            <Image
              className="object-cover brightness-75 rounded-lg mb-6"
              src={
                "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711245460/PlusPlusStudio/Screenshot_2024-03-24_085039_eylzso.png"
              }
              alt={"Logo"}
              layout="responsive"
              width={1920}
              height={1080}
              priority={true}
            />
            <Image
              className="object-cover brightness-75 rounded-lg mb-6"
              src={
                "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711266640/PlusPlusStudio/Screenshot_2024-03-24_144822_scozkp.png"
              }
              alt={"Logo"}
              layout="responsive"
              width={1920}
              height={1080}
              priority={true}
            />
            <Image
              className="object-cover brightness-75 rounded-lg mb-6"
              src={
                "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711267579/PlusPlusStudio/Screenshot_2024-03-24_150537_lcwlib.png"
              }
              alt={"Logo"}
              layout="responsive"
              width={1920}
              height={1080}
              priority={true}
            />
            <Image
              className="object-cover brightness-75 rounded-lg mb-6"
              src={
                "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711275050/PlusPlusStudio/Screenshot_2024-03-24_163347_azzfbs.png"
              }
              alt={"Logo"}
              layout="responsive"
              width={1920}
              height={1080}
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
