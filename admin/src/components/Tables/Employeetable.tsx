import next from "next";
import Employeerow from "./Employeesrow";

const data = [
  {
    sno: 1,
    empname: "Employee",
    desg: "Designation",
    phno: 9827321222,
    bg: "A+ve",
  },
];

const Employeetable = () => {

  return (
    <div>
      <div className="relative max-w-screen-2xl overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.no
              </th>
              <th scope="col" className="px-6 py-3">
                Employee Name
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Blood Group
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <Employeerow key={row.sno} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employeetable;
