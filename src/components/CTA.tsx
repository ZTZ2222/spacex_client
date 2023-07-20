import Button from "./Button";

const CTA = () => {
  return (
    <section className="mx-1 mb-1 rounded-lg bg-gray-900 px-6 py-10 text-white">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-4xl xl:text-5xl">
          Готовы исследовать звезды?
        </h2>
        <p className="mb-8 text-center text-sm text-white md:px-16 md:text-base xl:text-xl">
          Присоединяйтесь к нам в нашем путешествии, чтобы революционизировать
          космические исследования и сделать невозможное возможным.
        </p>
        <div className="flex w-full justify-center">
          <Button href="#" text="Связаться с нами" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
