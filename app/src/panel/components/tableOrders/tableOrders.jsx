import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const data = [
  {
    name: "CARAMELIZED ONION BURGER",
    client: "matheus@gmail.com",
    imgSrc:
      "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "1",
    price: "$12",
  },
];

const tableOrders = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 m-5 max-w-5xl mx-auto">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Burger
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Client
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Quantity
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
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
              <td className="px-6 py-4">{person.description}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">{person.price}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <a href="#">
                  <RiDeleteBinLine className="h-6 w-6" />
                  </a>
                  <a href="#">
                    <RiEdit2Line className="h-6 w-6" />
                  </a>
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
