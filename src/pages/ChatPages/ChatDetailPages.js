import React from "react";
import ChatDetail from "../../components/organisms/Chat/ChatDetail";
import LayoutMains from "../../components/organisms/Layout/LayoutMains";
import Navbar from "../../components/organisms/Layout/Navbar";

export default function ChatDetailPages() {
  return (
    <div className="bg-[#262626]">
      <div className="container flex flex-row  justify-end h-screen w-full">
        <section className="basis-[80%] relative   border-l border-white max-h-full ">
          <LayoutMains />
          <div>
            <ChatDetail />
          </div>
          <Navbar />
        </section>
      </div>
    </div>
  );
}
