import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/e1ead6b1-78a8-48f7-acc6-af336c3f4803/files/6f4608d1-bb79-4504-b867-472efd22e395.jpg"
          alt="Украшения из натуральных камней"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Аметист · Лазурит · Розовый кварц</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          КАМНИ ДУШИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Украшения ручной работы из натуральных самоцветов — колье, браслеты и серьги, созданные для тех, кто ценит природную красоту
        </p>
        <a
          href="#collection"
          className="inline-block border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
        >
          Смотреть коллекцию
        </a>
      </div>
    </div>
  );
}