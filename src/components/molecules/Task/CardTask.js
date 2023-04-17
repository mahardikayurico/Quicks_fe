import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosCheckboxOutline } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { TbPencilMinus } from "react-icons/tb";

export default function CardTask() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/mahardikayurico/Quicks_json/tasks"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {data.map((item) => (
        <div className="border-b border-[#828282]">
          <div className="flex flex-row justify-between px-4 ">
            <IoIosCheckboxOutline className="mt-1 text-lg text-black font-bold  hover:cursor-pointer" />
            <h1 className="text-[#4F4F4F] font-semibold ">{item.title}</h1>
            <h1 className="text-[#EB5757] text-md ">{item.deadline}</h1>
            <h1 className="text-[#4F4F4F] text-md">{item.date}</h1>
            <IoIosArrowDown className="mt-1 text-lg text-black font-bold  hover:cursor-pointer" />
            <h1 className="pb-1 font-bold">...</h1>
          </div>
          <div className="flex flex-row px-2 mt-1 ml-20">
            <IoTimeOutline className="mt-2 text-lg text-[#2F80ED] font-bold  " />
            <form className="ml-4 border border-black p-1">
              <input type="date" value={item.date} className="text-sm" />
            </form>
          </div>
          <div className="flex flex-row px-2 mt-1 ml-20 mb-2">
            <TbPencilMinus className="mt-2 text-4xl text-[#2F80ED] font-bold  " />
            <div>
              <h1 className="ml-3 p-1 text-sm">{item.desc}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
