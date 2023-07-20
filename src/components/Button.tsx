import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="group relative my-3 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-800 to-lime-700 p-0.5 text-sm font-medium text-gray-900 hover:animate-bounce hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-sky-500"
    >
      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        {text}
      </span>
    </Link>
  );
};

export default Button;
