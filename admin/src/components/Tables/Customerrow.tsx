import next from "next";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

const Customerrow = (props: { comp: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; add: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; gst: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; phone: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => {
  return (
    <>
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
        >
          {props.comp}
        </td>
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">{props.add}</td>
        <td className="px-6 py-4">{props.gst}</td>
        <td className="px-6 py-4">
          {props.phone}
        </td>
      </tr>
    </>
  );
};

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