import React from "react";
import ChatMains from "../../components/organisms/Chat/ChatMains";
import LayoutMains from "../../components/organisms/Layout/LayoutMains";
import Navbar from "../../components/organisms/Layout/Navbar";

export default function ChatPages() {
  return (
    <div className="bg-[#262626]">
      <div className="container flex flex-row  justify-end h-screen w-full">
        <section className="basis-[80%] relative   border-l border-white max-h-full ">
          <LayoutMains />
          <div>
            <ChatMains />
          </div>
          <Navbar />
        </section>
      </div>
    </div>
  );
}
