import Link from "next/link";
import {
  TbBrandDiscord,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

const Socials = () => {
  return (
    <ul className="flex justify-center gap-4 p-2 text-3xl">
      <li>
        <Link href="#">
          <TbBrandFacebook className="rounded-full text-blue-700" />
        </Link>
      </li>
      <li>
        <Link href="#">
          <TbBrandInstagram className="rounded-full text-pink-500" />
        </Link>
      </li>
      <li>
        <Link href="#">
          <TbBrandTwitter className="rounded-full text-sky-600" />
        </Link>
      </li>
      <li>
        <Link href="#">
          <TbBrandDiscord className="rounded-full text-purple-700" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
