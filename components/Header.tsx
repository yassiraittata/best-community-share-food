import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center mt-10 mb-5">
      <div className="max-w-[80%]  w-full p-5 rounded-2xl backdrop-blur-xl bg-white drop-shadow-md flex justify-between items-center">
        <h1 className="text-secodary font-bold text-2xl ">FOODIE</h1>
        <div>
          <ul className="flex justify-between items-center space-x-12">
            <li className="font-medium hover:text-primary">
              <Link href="/">Meals</Link>
            </li>
            <li className="font-medium hover:text-primary">
              <Link href="/">About us</Link>
            </li>
            {/* <li className="font-medium hover:text-primary">
              <Link href="/">Meals</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <div>
            <button
              type="button"
              className="text-white bg-secodary hover:bg-secodary/80 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
