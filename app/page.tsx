import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[100px] border border-gray-300 fixed w-full z-20 top-0 start-0 bg-white">
        <p className="font-semibold text-xl">
          + + <span className="text-[16px] tracking-widest">Studio</span>
        </p>
      </div>

      <section className="mt-[180px] mb-[60px]">
        <div className="mx-4 lg:mx-[50px] flex flex-col justify-center items-center">
          <p className="text-5xl mb-4 text-center">Create Your Dream Website</p>
          <p className="text-sm text-gray-400 tracking-widest text-center">
            The Right Partner for Your Website. Create a professional, easy to
            use and optimal website.
          </p>
          <div className="mt-8">
            <Link
              href={"/about"}
              className="mt-8 mr-4 px-10 py-2 bg-white text-black border-2 border-black rounded-full text-sm tracking-widest hover:bg-black hover:text-white"
            >
              what we do ?
            </Link>
            <Link
              href={"/order"}
              className="mt-8 px-10 py-2 bg-black text-white rounded-full text-sm tracking-widest hover:bg-gradient-to-r to-emerald-600 from-sky-400"
            >
              order here !
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white mb-10">
        <div className="mx-4 lg:mx-[50px]">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
            {/* 01 */}
            <div className="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-200 xl:p-6">
              <Link href={"codeplus"}>
                <div className="bg-slate-400 h-56 w-full rounded-lg">
                  <Image
                    className="h-full w-full rounded-lg object-cover shadow-md"
                    src={
                      "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711245460/PlusPlusStudio/Screenshot_2024-03-24_085039_eylzso.png"
                    }
                    alt={"coming-soon"}
                    width={1920}
                    height={1080}
                    priority={true}
                    sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                  />
                </div>
              </Link>
              <div className="flex flex-col mt-4">
                <Link href={"codeplus"}>
                  <p className="text-base font-semibold text-left">
                    CodePlus Course Website
                  </p>
                </Link>
                <Link href={"codeplus"}>
                  <p className="font-light text-gray-400 sm:text-sm text-justify mt-2">
                    ClassPluss is a platform that offers programming courses for
                    children.{" "}
                  </p>
                </Link>
              </div>
            </div>
            {/* 02 */}
            <div className="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-200 xl:p-6">
              <Link href={"plusidentity"}>
                <div className="bg-slate-400 h-56 w-full rounded-lg">
                  <Image
                    className="h-full w-full rounded-lg object-cover shadow-md"
                    src={
                      "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711292668/PlusPlusStudio/Screenshot_2024-03-24_220347_wqirst.png"
                    }
                    alt={"coming-soon"}
                    width={300}
                    height={200}
                    priority={true}
                    sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                  />
                </div>
              </Link>
              <div className="flex flex-col mt-4">
                <Link href={"plusidentity"}>
                  <p className="text-base font-semibold text-left">
                    PlusIdentity Personal Website
                  </p>
                </Link>
                <Link href={"plusidentity"}>
                  <p className="font-light text-gray-400 sm:text-sm text-justify mt-2">
                    PlusIdentity is a site for expressing a person`s identity
                    that reflects who he is, what he does, and the values he
                    adheres to.{" "}
                  </p>
                </Link>
              </div>
            </div>
            {/* 03 */}
            <div className="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-200 xl:p-6">
              <div className="bg-slate-400 h-56 w-full rounded-lg">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711202088/PlusPlusStudio/coming-soon_a4ri6v.jpg"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
              <div className="flex flex-col mt-4">
                <p className="text-base font-semibold text-left">Coming Soon</p>
                <p className="font-light text-gray-400 sm:text-sm text-justify mt-2">
                  Look forward to the newest website from ++ Studio. The product
                  is currently in the design and manufacturing phase. Thank You.{" "}
                </p>
              </div>
            </div>
            {/* 04 */}
            <div className="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-200 xl:p-6">
              <div className="bg-slate-400 h-56 w-full rounded-lg">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711202088/PlusPlusStudio/coming-soon_a4ri6v.jpg"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
              <div className="flex flex-col mt-4">
                <p className="text-base font-semibold text-left">Coming Soon</p>
                <p className="font-light text-gray-400 sm:text-sm text-justify mt-2">
                  Look forward to the newest website from ++ Studio. The product
                  is currently in the design and manufacturing phase. Thank You.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex justify-center items-center h-[80px]">
        <p className="text-sm text-center sm:tracking-[8px] text-gray-400">
          hand made on earth by <Link href={'/admin'}>human.</Link>
        </p>
      </footer>
    </>
  );
}
