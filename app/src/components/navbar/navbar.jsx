import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import {
  MdOutlineShoppingBag,
  MdOutlineSearch,
  MdOutlinePersonOutline,
  MdMenu,
} from "react-icons/md";
import Logo from "../../assets/logo.svg";

const products = [
  // Produtos fictícios para o modal do carrinho
];

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCartModal = () => setIsCartOpen(true);
  const closeCartModal = () => setIsCartOpen(false);
  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  const openSearchModal = () => setIsSearchOpen(true);
  const closeSearchModal = () => setIsSearchOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full h-24 bg-black flex items-center justify-between max-w-7xl mx-auto px-4">
      <div className="max-w-7xl h-full w-full flex justify-between items-center mx-auto">
        <div className="flex items-end">
          <Link to="/">
            <img className="w-40 mr-10" src={Logo} alt="Logo" />
          </Link>
          <div className="hidden md:flex">
          <ul className="flex text-white font-bold text-2xl gap-x-6">
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <Link to="/promotion">PROMOTION</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <Link to="/burgers">BURGERS</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <Link to="/menu">MENU</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="text-white hover:text-[#f8b825] cursor-pointer">
            <MdOutlineSearch
              className="h-full md:text-[41px] text-[25px] flex items-end pt-[2px]"
              onClick={openSearchModal}
            />
          </div>
          <div className="text-white hover:text-[#f8b825] cursor-pointer">
            <MdOutlinePersonOutline
              className="md:text-[44px] text-[29px]"
              onClick={openLoginModal}
            />
          </div>
          <div
            className="text-white hover:text-[#f8b825] cursor-pointer"
            onClick={openCartModal}
          >
            <MdOutlineShoppingBag className="md:text-[45px] text-[26px] md:pb-1" />
          </div>
          <div
            className="md:hidden text-white hover:text-[#f8b825] cursor-pointer"
            onClick={toggleMenu}
          >
            <MdMenu className="text-[33px]" />
          </div>
        </div>
      </div>
      <Transition show={isMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 md:hidden"
          onClose={toggleMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden h-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto h-full w-full">
                  <div className="flex h-full flex-col bg-white shadow-xl w-full">
                    <div className="flex-1 py-6 px-4 overflow-y-auto">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                          Menu
                        </h2>
                        <button
                          className="text-gray-400 hover:text-gray-500"
                          onClick={toggleMenu}
                        >
                          <IoMdClose className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="mt-6">
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/promotion"
                              className="text-gray-900 hover:text-[#f8b825] font-bold text-lg"
                              onClick={toggleMenu}
                            >
                              PROMOTION
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/burgers"
                              className="text-gray-900 hover:text-[#f8b825] font-bold text-lg"
                              onClick={toggleMenu}
                            >
                              BURGERS
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/menu"
                              className="text-gray-900 hover:text-[#f8b825] font-bold text-lg"
                              onClick={toggleMenu}
                            >
                              MENU
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about"
                              className="text-gray-900 hover:text-[#f8b825] font-bold text-lg"
                              onClick={toggleMenu}
                            >
                              ABOUT
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {isCartOpen && (
        <Transition.Root show={true} as={Fragment}>
          <Dialog className="relative z-10" onClose={closeCartModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Cart
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={closeCartModal}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <IoMdClose
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {products.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-200">
                                      <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-black">
                                          <h3>
                                            <div href={product.href}>
                                              {product.name}
                                            </div>
                                          </h3>
                                          <p className="ml-4">
                                            {product.price}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-black">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-black">
                                          Qty {product.quantity}
                                        </p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-[#f8b825]"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="pb-5">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Shipping</p>
                              <p>$12.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Shipping and taxes calculated at checkout.
                            </p>
                          </div>
                          <div className="border-t border-gray-200 pt-5">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Total</p>
                              <p>$262.00</p>
                            </div>
                          </div>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center border-2 border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-black hover:border-black"
                            >
                              Finished
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or{" "}
                              <button
                                type="button"
                                className="font-medium text-black hover:text-[#f8b825]"
                                onClick={closeCartModal}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {isLoginOpen && (
        <Transition.Root show={true} as={Fragment}>
          <Dialog className="relative z-10" onClose={closeLoginModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 left-0 mx-auto w-[90%] md:w-full max-w-full md:pl-10 flex justify-center items-center">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="inline-block w-full max-w-md md:p-6 p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                        <button
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-600"
                          onClick={closeLoginModal}
                        >
                          <IoMdClose className="h-6 w-6" />
                        </button>
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 overflow-hidden">
                          Log in to your account
                        </h1>
                        <form className="mt-6" action="#" method="POST">
                          <div>
                            <label className="block text-black">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name=""
                              id=""
                              placeholder="Enter Email Address"
                              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:bg-white focus:outline-none"
                              autoFocus
                              autoComplete="email"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <label className="block text-black">Password</label>
                            <input
                              type="password"
                              name=""
                              id=""
                              placeholder="Enter Password"
                              minLength="6"
                              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:bg-white focus:outline-none"
                              required
                            />
                          </div>
                          <div className="text-right mt-2">
                            <a
                              href="#"
                              className="text-sm font-semibold text-black hover:text-[#f8b825] focus:text-[#f8b825]"
                            >
                              Forgot Password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="w-full block bg-black border-2 border-transparent hover:border-black hover:bg-white text-white hover:text-black font-semibold px-4 py-3 mt-6"
                          >
                            Log In
                          </button>
                        </form>
                        <hr className="my-6 border-gray-300 w-full" />
                        <button
                          type="button"
                          className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold px-4 py-3 border border-gray-300"
                        >
                          <div className="flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              className="w-6 h-6"
                              viewBox="0 0 48 48"
                            >
                              <defs>
                                <path
                                  id="a"
                                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                />
                              </defs>
                              <clipPath id="b">
                                <use xlinkHref="#a" overflow="visible" />
                              </clipPath>
                              <path
                                clipPath="url(#b)"
                                fill="#FBBC05"
                                d="M0 37V11l17 13z"
                              />
                              <path
                                clipPath="url(#b)"
                                fill="#EA4335"
                                d="M0 11l17 13 7-6.1L48 14V0H0z"
                              />
                              <path
                                clipPath="url(#b)"
                                fill="#34A853"
                                d="M0 37l30-23 7.9 1L48 0v48H0z"
                              />
                              <path
                                clipPath="url(#b)"
                                fill="#4285F4"
                                d="M48 48L17 24l-4-3 35-10z"
                              />
                            </svg>
                            <span className="ml-4">Log in with Google</span>
                          </div>
                        </button>
                        <p className="mt-8">
                          Need an account?{" "}
                          <a
                            href="#"
                            className="text-black hover:text-[#f8b825] font-semibold"
                          >
                            Create an account
                          </a>
                        </p>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {isSearchOpen && (
        <Transition.Root show={true} as={Fragment}>
          <Dialog className="relative z-10" onClose={closeSearchModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form className="absolute top-[105px] right-0 left-0 md:w-1/2 mx-auto">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm md:font-medium font-normal text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 md:pl-0 md:text-sm text-xs uppercase border md:font-semibold border-gray-300 bg-white dark:border-gray-600 outline-none placeholder:text-black text-black"
                        placeholder="Search burgers..."
                        required
                      />
                      <MdOutlineSearch className="m-auto md:w-[32px] md:h-[32px] h-[25px] w-[25px] absolute md:right-2 left-2" />
                    </div>
                  </form>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );
}

export default Navbar;
