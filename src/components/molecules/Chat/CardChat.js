import React from "react";
import axios from "axios";
import profile from "../../../assets/images/profile.svg";
import { useNavigate } from "react-router-dom";

export default function CardChat() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/mahardikayurico/Quicks_json/posts"
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
    <div className="pb-16">
      {data.map((item) => (
        <div className="flex flex-row  border-b-2 border-[#828282] mb-2 ml-4 mr-4">
          <div className="mt-5">
            <img src={profile} />
          </div>
          <div className="mt-2 ml-5">
            <div className="flex flex-row">
              <h1
                className="text-md font-semibold text-[#2F80ED] hover:cursor-pointer"
                onClick={() => navigate(`/chat/${item.id}`)}
              >
                {item.topics}
              </h1>
              <h1 className="text-sm text-[#4F4F4F] ml-4 mt-1">{item.date} </h1>
            </div>
            <h1 className="text-md text-[#4F4F4F] font-semibold">
              {item.name}
            </h1>
            <h1 className="text-sm text-[#98949E]">{item.chat}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
