import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="md:w-1/2 w-full">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-dark-gray"
                  >
                    Firt name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-light-gray text-dark-gray sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-dark-gray"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-light-gray text-dark-gray sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-dark-gray"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-light-gray text-dark-gray sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-semibold text-dark-gray"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border border-light-gray text-dark-gray sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-blue-500">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-secodary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-base text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
