import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CardChatDetails from "../../molecules/Chat/CardChatDetails";

export default function ChatDetail() {
  const navigate = useNavigate();
  const [chat, setChat] = React.useState([]);

  const { id } = useParams();

  const getChatById = (id) => {
    return axios.get(
      `https://my-json-server.typicode.com/mahardikayurico/Quicks_json/posts/${id}`
    );
  };

  React.useEffect(() => {
    getChatById(id)
      .then((response) => {
        // data yang diterima dari server
        setChat(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="flex flex-row">
      <div className="basis-[30%]"></div>
      <div className="basis-[70%] bg-white container border-b-2 border-[#BDBDBD] justify-end mt-20 rounded-lg">
        <div className=" bg-white rounded-lg p-1 ml-3 px-2 flex flex-row">
          <BsArrowRight
            className="mt-3 text-xl text-black font-bold rotate-180 hover:cursor-pointer"
            onClick={() => navigate(`/chat`)}
          />
          <div className="ml-3">
            <h1 className="text-md font-semibold text-[#2F80ED]">
              {chat.topics}
            </h1>
            <h1 className="text-sm text-[#98949E]">3 participant</h1>
          </div>
        </div>

        <CardChatDetails />
      </div>
    </div>
  );
}
