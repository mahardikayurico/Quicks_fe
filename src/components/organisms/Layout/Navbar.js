import React from "react";
import iconchat from "../../../assets/images/iconchat.svg";
import iconmains from "../../../assets/images/iconmains.svg";
import icontask from "../../../assets/images/icontask.svg";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row absolute bottom-0 right-0 justify-end">
        <button>
          <img src={iconchat} className="w-11 h-11" />
        </button>
        <button>
          <img src={icontask} className="w-12 h-12" />
        </button>
        <button>
          <img src={iconmains} className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}
