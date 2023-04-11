import React from "react";
import { RxCaretSort } from "react-icons/rx";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

export default function TableCustomers() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/mahardikayurico/square_json/posts"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-6 mr-2">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 font-family-quicksand dark:text-gray-400">
          <thead className="text-xs text-[#98949E] font-family-quicksand bg-[#FAFAFA] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex flex-row justify-between">
                  <h1> Customer Name</h1>
                  <RxCaretSort className="font-bold text-xl " />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex flex-row justify-between">
                  <h1>Level</h1>
                  <RxCaretSort className="font-bold text-xl " />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex flex-row justify-between">
                  <h1>Favorite Menu</h1>
                  <RxCaretSort className="font-bold text-xl " />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex flex-row justify-between">
                  <h1>Total Transaction</h1>
                  <RxCaretSort className="font-bold text-xl " />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex flex-row justify-between">
                  <h1>Action</h1>
                  <RxCaretSort className="font-bold text-xl " />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="bg-white border-b font-family-quicksand dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4 ">
                  <h1 className="bg-[#FEF5F6] mx-auto">{item.level}</h1>
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.total}</td>
                <td className="px-6 py-4 flex flex-row justify-between">
                  <MdOutlineContentPasteSearch className="mt-1" />
                  <h1> Detail</h1>
                  <TbPencilMinus className="mt-1 bg-[#FAFAFA]" />
                  <RiDeleteBin6Line className="mt-1 text-[#F02D3A] bg-[#FEF5F6]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
