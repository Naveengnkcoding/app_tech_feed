import next from "next";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

const Customerrow = ({ row }: { row: any; }) => (
  <>
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <td
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {row.comp}
      </td>
      <td className="px-6 py-4">{row.name}</td>
      <td className="px-6 py-4">{row.add}</td>
      <td className="px-6 py-4">{row.gst}</td>
      <td className="px-6 py-4">
        {row.phone}
      </td>
    </tr>
  </>
);

export default Customerrow;
// const Customerrow = ({comp}: {comp: any;}, {name}: {name: any}, {add}: {add: any;}, {gst}: {gst: any;}, {phone}: {phone: any;}) => {
//   return (
//     <>
//       <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//         <td
//           scope="row"
//           className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//         >
//           {comp}
//         </td>
//         <td className="px-6 py-4">{name}</td>
//         <td className="px-6 py-4">{add}</td>
//         <td className="px-6 py-4">{gst}</td>
//         <td className="px-6 py-4">
//           {phone}
//         </td>
//       </tr>
//     </>
//   );
// };