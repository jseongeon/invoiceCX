import { motion } from 'motion/react';

export default function Section6() {
  return (
    <section className="relative bg-[#152c2d] w-full min-h-[70vh] md:min-h-screen overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[70vh] md:min-h-screen relative">
        {/* 좌측 상단 그룹 */}
        <motion.div
          className="absolute top-8 md:top-12 lg:top-16 left-4 md:left-8 lg:left-16 font-['IBM_Plex_Sans_KR',sans-serif] text-white z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col gap-0 md:gap-0.5 lg:gap-1">
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal">
              조금씩, 그리고 빠르게.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal">
              세심히, 그리고 특별하게.
            </p>
          </div>
        </motion.div>

        {/* 우측 하단 그룹 */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 lg:bottom-16 right-4 md:right-8 lg:right-16 font-['IBM_Plex_Sans_KR',sans-serif] text-white text-right z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col gap-0 md:gap-0.5 lg:gap-1">
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal">
              더욱 향상된 CX를 위해서,
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal">
              끊임없이 연구하는 자세로.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
