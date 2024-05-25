import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const data = [
  {
    name: "Steven Jobs",
    email: "jobs@sailboatui.com",
    imgSrc:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    state: "Active",
    charge: "Client",
    teams: ["Design", "Product", "Develop"],
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
              State
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Role
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
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{person.name}</div>
                  <div className="text-gray-400">{person.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  {person.state}
                </span>
              </td>
              <td className="px-6 py-4">{person.charge}</td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <button>
                    <RiDeleteBinLine className="h-6 w-6" />
                  </button>
                  <button>
                    <RiEdit2Line className="h-6 w-6" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default tableUsers;
