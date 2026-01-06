import { motion } from 'motion/react';
import invoiceImage from '../../assets/b43080753f98ae2c071efb7e32c09661faed7622.png';

export default function Section2() {
  return (
    <section className="relative bg-[#f2f2f2] w-full min-h-screen overflow-hidden py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* 청구서 이미지 */}
          <motion.div
            className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={invoiceImage}
              alt="청구서"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* 텍스트 컨텐츠 */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 max-w-xl lg:max-w-none">
            <motion.div
              className="font-['IBM_Plex_Sans_KR',sans-serif] text-[#303634] font-bold"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight tracking-tight">WHY?</h2>
            </motion.div>

            <motion.div
              className="font-['IBM_Plex_Sans_KR',sans-serif] text-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed mb-4 md:mb-6">
                기존 청구서의 단점
              </p>
              <ol className="list-decimal text-base md:text-lg lg:text-xl xl:text-2xl space-y-3 md:space-y-4">
                <li className="ms-6 md:ms-8 lg:ms-12">
                  <span className="leading-relaxed">고객이 해당 청구서에서 문의하려면 청구서를 이탈해야함</span>
                </li>
                <li className="ms-6 md:ms-8 lg:ms-12">
                  <span className="leading-relaxed">결제 링크가 연결되지 않아 계좌번호를 메모해야 하는 불편</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
