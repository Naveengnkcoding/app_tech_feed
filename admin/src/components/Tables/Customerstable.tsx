import next from "next";
import Customerrow from "./Customerrow";

const data = [
  {
    comp: "Yaskawa",
    name: "Name",
    add: "USA",
    gst: "GSTIN8093284",
    phone: 9232110033,
  },
];

const Tablecust = ({}) => {
  return (
    <div>
      <div className="relative max-w-screen-2xl overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                GST
              </th>
              <th scope="col" className="px-6 py-3">
                Phone number
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <Customerrow key={row.comp} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablecust;
