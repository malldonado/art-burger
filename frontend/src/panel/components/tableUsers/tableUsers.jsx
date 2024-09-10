import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const data = [
  {
    name: "Steven Jobs",
    email: "jobs@sailboatui.com",
    imgSrc:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    address: "Rua Frederico Guerreiro, 123, Santos",
    orders: "14",
    avaliation: "4.8",
  },
];

const tableUsers = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 m-5 max-w-5xl mx-auto">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Address
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">
              All Orders
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">
              Avaliation
            </th>
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
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{person.name}</div>
                  <div className="text-gray-400">{person.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{person.address}</td>
              <td className="px-6 py-4 text-center">{person.orders}</td>
              <td className="px-6 py-4 text-center">{person.avaliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default tableUsers;
