import React from "react";

export default function TableCustomers() {
  return (
    <div className="mt-6 mr-2">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#98949E]  bg-[#FAFAFA] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" class="px-6 py-3">
                Level
              </th>
              <th scope="col" class="px-6 py-3">
                Favorite Menu
              </th>
              <th scope="col" class="px-6 py-3">
                Total Transaction
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Odis Rhinehart
                </th>
                <td class="px-6 py-4">Warga</td>
                <td class="px-6 py-4">Chicken & Ribs Combo</td>
                <td class="px-6 py-4">IDR 194,700</td>
                <td class="px-6 py-4 flex flex-row">
                  <h1>Detail</h1>
                  <h1>hah</h1>
                  <h1>no</h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
