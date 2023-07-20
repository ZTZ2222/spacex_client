import Button from "./Button";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section
      className="mx-1 my-1 flex flex-col items-center rounded-lg bg-top md:bg-left-top lg:items-start xl:bg-right"
      style={{
        backgroundImage: "url('/assets/back.jpg')",
      }}
    >
      <div className="mt-16 justify-evenly p-2 md:mt-24 md:flex md:w-11/12">
        <div className="my-5 text-center md:text-start">
          <h1 className="text-gradient font-museo-sans-700 overflow-hidden bg-gradient-to-r from-white from-[17%] to-orange-600 to-[60%] text-3xl uppercase text-transparent md:text-5xl lg:text-6xl xl:text-7xl">
            Путешествие
          </h1>
          <h2 className="text-gradient font-museo-sans-700 bg-gradient-to-r from-white from-[17%] to-orange-600 to-[60%] text-sm uppercase text-transparent md:mb-6 md:text-base lg:text-xl xl:mb-16 xl:text-3xl">
            На красную планету
          </h2>
          <Button text="Начать путешествие" href="#" />
        </div>
        <Stats />
      </div>
      <div className="h-36" />
    </section>
  );
};

export default Hero;
