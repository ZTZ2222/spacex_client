import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const Business = () => {
  return (
    <section className="mx-1 mb-1 rounded-lg bg-gray-900 px-6 py-10">
      <SectionTitle title="Добро пожаловать в SpaceX" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/assets/rocket.jpg"
              alt="Ракета"
              width={550}
              height={720}
              className="w-4/5 rounded-lg md:w-full xl:w-3/4 "
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 md:pl-10">
            <h2 className="my-6 text-2xl font-semibold text-white md:text-3xl">
              Революция в космическом исследовании
            </h2>
            <p className="mb-3 font-sans text-sm text-white lg:text-base xl:mb-8">
              В компании SpaceX мы посвящаем себя развитию границ космического
              исследования. С помощью передовых технологий, видениярного
              руководства и страстного коллектива мы стремимся сделать космос
              доступным для всех.
            </p>
            <p className="mb-3 font-sans text-sm text-white lg:text-base xl:mb-8">
              Наша миссия - революционизировать космическую технологию и сделать
              жизнь на многих планетах возможной. Через инновации и
              непрекращающуюся работу над совершенством, мы стремимся создать
              будущее, в котором человечество сможет исследовать и заселить
              другие планеты.
            </p>
            <p className="mb-3 hidden font-sans text-sm text-white lg:block lg:text-base xl:mb-8">
              Будь то запуск спутников, доставка грузов на Международную
              космическую станцию или разработка следующего поколения
              космических кораблей, SpaceX находится во главе космического
              исследования, открывая новые возможности для научных открытий,
              коммерческих возможностей и человеческого прогресса.
            </p>
            <div className="flex w-full justify-center">
              <Button text="Узнать больше" href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
