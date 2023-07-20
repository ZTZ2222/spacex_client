import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="#"
      className="w-44 border-x border-gray-500 border-opacity-50 transition-all hover:bg-black hover:bg-opacity-20 md:w-52 lg:w-60"
    >
      <Image
        alt="SpaceX Logo"
        src="/assets/logo.png"
        width={270}
        height={100}
      />
    </Link>
  );
};

export default Logo;
