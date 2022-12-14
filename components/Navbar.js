import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    const changeNavbarStyle = () => {
      window.scrollY > 70 ? setActiveNavbar(true) : setActiveNavbar(false);
    };

    window.addEventListener("scroll", changeNavbarStyle);

    return () => window.removeEventListener("scroll", changeNavbarStyle);
  }, []);
  const { asPath } = useRouter();
  return (
    <header
      className={
        activeNavbar
          ? "sticky top-0 left-0 bg-gradient-to-r from-primary-2 to-primary shadow-lg shadow-black/20 z-10 animate-[drop_0.4s_forwards]"
          : asPath !== "/"
          ? "bg-gradient-to-r from-primary-2 to-primary"
          : undefined
      }
    >
      <nav className={`wrapper flex justify-between p-4`}>
        <h1
          className={`${
            activeNavbar
              ? "text-primary"
              : asPath !== "/"
              ? "text-primary"
              : undefined
          } text-3xl font-bold sm:text-4xl`}
        >
          <Link href="/">LOGO</Link>
        </h1>
        <ul className="flex items-center gap-3 sm:gap-1">
          <li>
            <Link href="/">
              <a className="sm:p-3 sm:py-2 sm:rounded-md sm:transition sm:hover:bg-primary-2">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <a className="sm:p-3 sm:py-2 sm:rounded-md sm:transition sm:hover:bg-primary-2">
                Menu
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="sm:p-3 sm:py-2 sm:rounded-md sm:transition sm:hover:bg-primary-2">
                Contact
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/cart">
              <a className="block sm:p-2 sm:rounded-md sm:transition sm:hover:bg-primary-2">
                <span className="absolute -top-3 -right-3 p-1 grid place-content-center bg-white min-w-[1.5rem] h-[1.5rem] rounded-full sm:-top-1 sm:-right-1">
                  {totalAmount}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
