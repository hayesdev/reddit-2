import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/images/Reddit-Logo.wine.svg";
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  VideoCameraIcon,
  SparklesIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";

function Header() {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const handleClick = (prevState: boolean) => {
  //     setIsOpen(!prevState);
  //   };

  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50">
      <div className="relative w-20 h-10 flex-shrink-0 cursor-pointer">
        <Image src={logo} layout="fill" />
      </div>
      <div className="flex items-center mx-7 lg:min-w-[300px]">
        <HomeIcon className="w-5 h-5" />
        {/* hidden on small screens, inline on large screens */}
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="w-5 h-5" />
      </div>

      {/* Search field */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <SearchIcon className="w-6 h-6 text-gray-400" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Search Reddit"
        />
        {/* allows submit by 'Enter' */}
        <button type="submit" hidden />
      </form>
      <div className="text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      {/* implement burger menu for small screens */}
      <div className="flex items-center mx-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
