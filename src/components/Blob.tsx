const Blob = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-50 px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-2xl filter" />
        <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-80 mix-blend-multiply blur-2xl filter" />
        <div className="animation-delay-4000 absolute -bottom-56 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-80 mix-blend-multiply blur-2xl filter" />
      </div>
    </section>
  );
};

export default Blob;
