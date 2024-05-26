import Link from "next/link";
import React from "react";

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
          <p className="text-4xl font-medium">What we do?</p>
          <p className="mt-6 text-gray-500 text-justify">
            We are a team dedicated to providing creative and professional
            solutions for all your website needs. From attention-grabbing
            landing pages to personal websites that reflect your unique
            identity, as well as proud company websites, we are ready to help
            you bring your ideas into the digital world.
          </p>
          <p className="mt-10 text-gray-500">What sets us apart from others?</p>
          <ul className="list-disc list-inside mt-4">
            <li className="pb-4 text-gray-500 text-justify">
              We believe that website appearance is very important. With a focus
              on engaging and responsive design, we create unforgettable visual
              experiences for your visitors.
            </li>
            <li className="pb-4 text-gray-500 text-justify">
              Websites are not just about appearance, but also about
              performance. We ensure that every website we build not only looks
              great, but also functions optimally, providing a smooth user
              experience.
            </li>
            <li className="pb-4 text-gray-500 text-justify">
              We prioritize communication and collaboration with clients. From
              start to finish, we strive to maintain open and transparent
              communication, ensuring that your every need and expectation is
              perfectly met.
            </li>
            <li className="pb-4 text-gray-500 text-justify">
              Whether you need a landing page for your new product, a personal
              website for your portfolio, or a complete company website, we have
              experience in providing various types of websites to suit your
              needs.
            </li>
          </ul>

          <p className="mt-10 text-justify">
            Let&apos;s make your website vision come true with us. Contact us
            today for a free consultation at ++Studio!
            <span className="font-medium text-blue-700">
              <Link href={"/order"}> Order here!</Link>
            </span>
          </p>
        </div>
        <div className="mx-4 lg:mx-[50px] mt-6 flex gap-5">
          <Link href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </Link>
          <Link href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
            </svg>
          </Link>
          <Link
            href={`mailto:whatplusplustudio@gmail.com?subject=Order [${new Date().toLocaleDateString()}]&body=Nama Pemesan:\nNomor Telepon:\n\nKita ada 3 Paket (Paket Basic, Pro, dan Premium) untuk lebih detailnya bisa lihat disini (Link)\nPilihan Paket:`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M88,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,56V184a16,16,0,0,1-16,16H156.53l-14.84,24.29a16,16,0,0,1-27.41-.06L99.47,200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V184H99.47a16.08,16.08,0,0,1,13.7,7.73L128,216l14.82-24.32A16.07,16.07,0,0,1,156.53,184H216Z"></path>
            </svg>
          </Link>
        </div>
      </section>

      <footer className="flex justify-center items-center h-[80px]">
        <p className="text-sm sm:tracking-[8px] text-gray-400 text-center">
          hand made on earth by human.
        </p>
      </footer>
    </>
  );
}

export default page;
