"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface MenuItemsData {
  name: string;
  title: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItemsData[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/menu-content/`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <nav className="flex items-center justify-center px-3">
      <ul className="font-segoe hidden gap-4 text-white sm:flex lg:gap-6 xl:gap-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="text-xs underline-offset-[10px] transition-transform hover:scale-x-105 hover:text-gray-300 hover:underline lg:text-sm xl:text-base"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* Burger Menu */}
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <Image
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          className="mx-4 h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          width={28}
          height={28}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute right-[-14px] top-12 z-30 mx-4 my-2`}
        >
          <ul className="flex flex-col gap-3 rounded-xl border border-black border-opacity-30 bg-gray-700 text-white">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="self-center px-3 py-1 hover:scale-x-105 hover:text-gray-300"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
