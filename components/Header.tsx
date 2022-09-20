import Image from "next/image";
import React from "react";
import logo from "../public/images/Reddit-Logo.wine.svg";

function Header() {
  return (
    <div>
      <div className="relative w-20 h-10">
        <Image
          src={logo}
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Header;
