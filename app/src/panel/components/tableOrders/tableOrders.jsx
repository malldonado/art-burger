import { RiCloseLargeFill, RiEdit2Line } from "react-icons/ri";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const data = [
  {
    name: "CARAMELIZED ONION BURGER",
    imgSrc:
    "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "example@email.com",
    quantity: "1",
    price: "$12",
  },
];

const Modal = ({ open, setOpen }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <form>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                      <div>
                        <label
                          htmlFor="burger"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Burger
                        </label>
                        <input
                          type="text"
                          id="burger"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                          placeholder="Burger"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="client"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Client Email
                        </label>
                        <input
                          type="text"
                          id="description"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                      <div>
                        <label
                          htmlFor="quantity"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Quantity
                        </label>
                        <input
                          type="number"
                          id="Quantity"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                          placeholder="Quantity"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                          placeholder="Value"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-black shadow-sm bg-[#ffc100] sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const tableOrders = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 m-5 max-w-5xl mx-auto">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Burger
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Client Email
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">
              Quantity
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100 bg-white">
          {data.map((person, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={person.imgSrc}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm flex items-center">
                  <div className="font-medium text-gray-700">{person.name}</div>
                </div>
              </th>
              <td className="px-6 py-4">{person.client}</td>
              <td className="px-6 py-4 text-center">{person.quantity}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2 text-center justify-center">{person.price}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <a href="#">
                  <RiCloseLargeFill className="h-6 w-6" />
                  </a>
                  <button onClick={() => setIsOpen(true)}>
                    <RiEdit2Line className="h-6 w-6" />
                  </button>
                  <Modal open={isOpen} setOpen={setIsOpen} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default tableOrders;
