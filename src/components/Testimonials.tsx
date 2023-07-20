import Image from "next/image";
import SectionTitle from "./SectionTitle";

interface TestimonialProps {
  text: string;
  author: string;
  company: string;
  image: string;
}

const testimonialsData = [
  {
    text: '"Сотрудничество с SpaceX - прорыв. Их запуски спутников расширили наш охват, обеспечивая передовые коммуникационные услуги."',
    author: "Майкл Джонсон",
    company: "Satellite Solutions",
    image: "/assets/testimonials/michael-johnson.jpg",
  },
  {
    text: '"Мечтаю о путешествии в космос, SpaceX воплощает её. Их стремление сделать космос доступным для всех - вдохновение."',
    author: "Джейн Смит",
    company: "XYZ Корпорация",
    image: "/assets/testimonials/jane-smith.jpg",
  },
  {
    text: '"SpaceX революционизировала космическую отрасль с помощью инноваций. Горжусь командой, расширяющей границы исследования космоса."',
    author: "Джон Доу",
    company: "ABC Компания",
    image: "/assets/testimonials/john-doe.jpg",
  },
  {
    text: '"SpaceX видит будущее в колонизации планет. Их прогресс в космической технологии формирует многопланетную жизнь человечества."',
    author: "Сара Томпсон",
    company: "Stellar Explorations",
    image: "/assets/testimonials/sarah-thompson.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mx-1 mb-1 rounded-lg bg-gray-900 px-6 py-10"
    >
      <SectionTitle title="Наши клиенты о нас" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 xl:gap-5">
        {testimonialsData.map((testimonial, index) => (
          <figure
            key={index}
            className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800 md:p-4"
          >
            <Image
              className="mx-auto mb-4 h-32 w-32 rounded-full"
              src={testimonial.image}
              alt={testimonial.author}
              width="300"
              height="300"
            />
            <div className="space-y-4 md:p-2">
              <blockquote>
                <p className="text-left font-sans text-sm italic text-white">
                  {testimonial.text}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-center text-sky-500 dark:text-sky-400">
                  {testimonial.author}
                </div>
                <div className="text-center text-slate-700 dark:text-slate-500">
                  {testimonial.company}
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
