"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-10 mb-10 mx-auto top-40 max-w-[80%] relative h-[650px]">
      <Image
        src="/images/banner2.png"
        alt="Hero"
        fill
        className="object-cover"
      />
      <div className="absolute" />
    </section>
  );
};

export default Hero;
