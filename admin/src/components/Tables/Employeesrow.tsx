import next from "next";

const Employeerow = ({ row }: { row: any }) => {
  return (
    <>
      <tr className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
        <td className="w-4 p-4">
          <div className="flex items-center">{row.sno}</div>
        </td>
        <th
          scope="row"
          className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
        >
          <div className="mr-3 flex items-center">{row.empname}</div>
        </th>
        <td className="px-4 py-3">
          <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 rounded px-2 py-0.5 text-xs font-medium">
            {row.desg}
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
          <div className="flex items-center">
            <div className=""></div>
            {row.phno}
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
          {row.bg}
        </td>
        <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              data-drawer-target="drawer-update-product"
              data-drawer-show="drawer-update-product"
              aria-controls="drawer-update-product"
              className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center rounded-lg bg-green-600 px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-0.5 mr-2 h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
              Edit
            </button>
            <button
              type="button"
              data-modal-target="delete-modal"
              data-modal-toggle="delete-modal"
              className="flex items-center rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-0.5 mr-2 h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Employeerow;
