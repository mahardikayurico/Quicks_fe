import React from "react";
import iconchat from "../../../assets/images/iconchat.svg";
import iconmains from "../../../assets/images/iconmains.svg";
import icontask from "../../../assets/images/icontask.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row absolute bottom-0 right-0 justify-end">
        <button onClick={() => navigate(`/chat`)}>
          <img src={iconchat} className="w-11 h-11" />
        </button>
        <button onClick={() => navigate(`/task`)}>
          <img src={icontask} className="w-12 h-12" />
        </button>
        <button onClick={() => navigate(`/`)}>
          <img src={iconmains} className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}
