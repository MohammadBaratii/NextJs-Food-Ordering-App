import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="relative">
      <section className="wrapper flex flex-col justify-between gap-5 py-0 sm:flex-row sm:gap-0">
        <div className="space-y-3 sm:mt-10">
          <h2 className="text-neutral-700 capitalize text-4xl font-bold">
            your favorite food <br /> delivered hot <br /> and fresh.
          </h2>
          <p className="text-neutral-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Qui
            consequuntur maxime asperiores. <br /> Et animi maxime, unde
            voluptates blanditiis.
          </p>
          <Link href="/menu">
            <a className="flex items-center gap-2 w-fit p-5 py-2 bg-primary text-white rounded-full duration-300 hover:gap-4">
              Order Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div className="relative max-w-xs w-64 h-64 m-auto drop-shadow-[-20px_35px_25px_rgba(0,0,0,0.25)] sm:w-72 sm:h-72 sm:m-0 md:max-w-none md:w-[30rem] md:h-[30rem] ">
          <Image
            src="/images/pizzas/pepperoni.png"
            alt="pizza"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
