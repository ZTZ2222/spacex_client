import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-1 mb-1 rounded-lg bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="#" className="flex justify-center sm:mb-0">
            <Image
              src="/assets/logo_no_borders.png"
              width={300}
              height={60}
              alt="SpaceX Logo"
            />
          </Link>
          <ul className="flex w-full flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0 md:justify-end md:gap-6">
            <li>
              <a href="#" className="hover:underline ">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Конфиденциальность
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Лицензирование
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SpaceX™
          </a>
          . Все права защищены.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
