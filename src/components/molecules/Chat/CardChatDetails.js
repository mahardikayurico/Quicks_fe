import React from "react";
import axios from "axios";
import profile from "../../../assets/images/profile.svg";

export default function CardChatDetails() {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      sender: "user1",
      text: "No worries. It will be completed ASAP. I’ve asked him yesterday.",
    },
    {
      sender: "user2",
      text: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks",
    },
    {
      sender: "user1",
      text: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    },
    { sender: "user2", text: "Sure thing, Claren" },
    { sender: "user1", text: "Morning. I’ll try to do them. Thanks" },
    { sender: "user2", text: "Glad to hear it." },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "user1", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-y-auto px-6 pt-6 ">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                message.sender === "user1" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg py-2 px-4 ${
                  message.sender === "user1" ? "bg-[#EEDCFF]" : "bg-[#FCEED3]"
                } text-[#4F4F4F] text-sm max-w-md break-all`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="">
          <div className="bg-gray-100 px-4 py-2 flex items-center">
            <input
              type="text"
              placeholder="Type a new message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 py-2 px-4 rounded-full bg-white focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-[#2F80ED] hover:bg-[#2F80EC] py-2 px-4 rounded-lg text-white ml-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
