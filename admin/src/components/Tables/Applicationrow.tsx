import next from "next";
import View from "../Popup/View";
const Applicationrow = ({ row }: { row: any }) => {
  return (
    <>
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="w-4 px-8">{row.sno}</td>
        <th
          scope="row"
          className="whitespace-nowrap px-12 py-4 font-medium text-gray-900 dark:text-white"
        >
          {row.engname}
        </th>
        <td className="px-12 py-1">{row.appno}</td>
        <td className="px-7 py-1">{row.comp}</td>
        <td className="px-12 py-1">{row.custname}</td>
        <td className="px-10 py-1">{row.drtype}</td>
        <td className="px-10 py-1">{row.srtype}</td>
        <td className="px-4 py-1">{row.status}</td>
        <td className="px-2 py-1">
          <View />
        </td>
      </tr>
    </>
  );
};

export default Applicationrow;
