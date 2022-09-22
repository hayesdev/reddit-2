import Image from "next/image";
import React, { useState } from "react";
import reddit from "../public/images/reddit.svg";
import logo from "../public/images/reddit-logo.svg";
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
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  //   const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="flex bg-white p-2 shadow-sm sticky top-0 z-50">
      <div className="relative w-20 h-10 flex-shrink-0 cursor-pointer">
        <Image src={reddit} layout="fill" />
      </div>
      <div className="flex items-center mx-7 lg:min-w-[120px]">
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

        {/* Sign in/Sign out button */}
        {session ? (
          <div
            onClick={() => signOut()}
            className="hidden items-center space-x-2 border border-gray-100 p-2 cursor-pointer lg:flex lg:min-w-[90px]"
          >
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                objectFit="contain"
                src={logo}
                layout="fill"
                className="text-gray-400"
                alt="reddit logo"
              />
            </div>
            <p className="text-gray-400 text-sm">Sign Out</p>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="hidden items-center space-x-2 border border-gray-100 p-2 cursor-pointer lg:flex lg:min-w-[90px]"
          >
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                objectFit="contain"
                src={logo}
                layout="fill"
                className="text-gray-400"
                alt="reddit logo"
              />
            </div>
            <div className="flex-1 text-xs">
              <p>{session}</p>
              <p className="text-gray-400 text-sm">Sign In</p>
            </div>
          </div>
        )}
      </div>

      {/* implement burger menu for small screens */}
      <div className="flex items-center ml-2 lg:hidden">
        <MenuIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
