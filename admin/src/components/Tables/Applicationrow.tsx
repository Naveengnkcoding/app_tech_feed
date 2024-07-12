import next from "next";
import View from "../Popup/View";
const Applicationrow = ({ row }: { row: any }) => {
  return (
    <>
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="w-4 p-4">{row.sno}</td>
        <th
          scope="row"
          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
        >
          {row.engname}
        </th>
        <td className="px-6 py-4">{row.appno}</td>
        <td className="px-6 py-4">{row.comp}</td>
        <td className="px-6 py-4">{row.custname}</td>
        <td className="px-6 py-4">{row.drtype}</td>
        <td className="px-6 py-4">{row.srtype}</td>
        <td className="px-6 py-4">{row.status}</td>
        <td className="px-6 py-4">
          <View />
        </td>
      </tr>
    </>
  );
};

export default Applicationrow;
