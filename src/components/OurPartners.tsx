import Image from "next/image";
import SectionTitle from "./SectionTitle";

const PartnerList = [
  {
    name: "Maxar Technologies Inc.",
    image_url: "/assets/partners/maxar.jpg",
  },
  {
    name: "Boeing Co.",
    image_url: "/assets/partners/boeing.jpg",
  },
  {
    name: "NASA",
    image_url: "/assets/partners/nasa.jpg",
  },
  {
    name: "Rocket Lab Inc.",
    image_url: "/assets/partners/rocket_lab.jpg",
  },
  {
    name: "Virgin Galactic",
    image_url: "/assets/partners/virgin_galactic.jpg",
  },
  {
    name: "Zero 2 Infinity",
    image_url: "/assets/partners/z2inf.jpg",
  },
  {
    name: "Axiom Space Inc.",
    image_url: "/assets/partners/axiom_space.jpg",
  },
  {
    name: "Orbital Sciences Corporation",
    image_url: "/assets/partners/orbital.jpg",
  },
];

const OurPartners = () => {
  return (
    <section className="mx-1 mb-1 rounded-lg bg-gray-900 px-6 py-10 text-white">
      <SectionTitle title="Наши партнеры" />
      <h2 className="mb-4 text-left font-semibold text-white md:text-center md:text-xl">
        Мы гордимся нашими эффективными стратегиями и успешными партнерствами с
        компаниями.
      </h2>
      <ul className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {PartnerList.map((item) => (
          <li className="flex justify-center">
            <Image
              alt={item.name}
              src={item.image_url}
              width={720}
              height={400}
              className="w-full md:w-3/5 lg:w-4/5"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurPartners;
