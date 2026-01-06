import { motion } from 'motion/react';

function AuthorContainer() {
  return (
    <motion.div
      className="flex font-['IBM_Plex_Sans',sans-serif] gap-2 md:gap-4 items-start text-[#f2f2f2] text-xl md:text-2xl lg:text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 2, 
        delay: 2.8
      }}
    >
      <p className="leading-normal">By</p>
      <p className="leading-normal">정성언</p>
    </motion.div>
  );
}

export default function Section1() {
  // 물방울이 제목 위치에서 떨어짐 - 뚝 떨어지는 느낌
  const dropDelay = 0.5;
  const dropSize = 32;
  const colorRevealDelay = 1.8; // 물방울이 떨어진 후 색상이 나타나기 시작

  return (
    <motion.section 
      className="relative bg-[#152c2d] w-full min-h-[70vh] md:min-h-screen overflow-hidden flex items-center justify-center px-4 md:px-8 lg:px-16 pb-20 md:pb-24 lg:pb-32"
      initial={{ filter: 'grayscale(100%)' }}
      animate={{ filter: 'grayscale(0%)' }}
      transition={{ 
        filter: { 
          duration: 6, 
          delay: colorRevealDelay, 
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
    >
      {/* Main content - 제목 위치 */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="relative flex flex-col gap-8 md:gap-16 lg:gap-32 items-start">
          {/* 물방울이 떨어지는 위치 - 제목 위쪽에서, 뚝 떨어지는 느낌 */}
          <motion.div
            className="absolute -top-20 md:-top-24 left-0 z-20"
            initial={{ y: -80, opacity: 0, scale: 0.4 }}
            animate={{ 
              y: 0,
              opacity: [0, 1, 1, 1, 0],
              scale: [0.4, 1, 1.3, 1.6, 0]
            }}
            transition={{
              y: { 
                duration: 1.3, 
                delay: dropDelay, 
                ease: [0.5, 0, 0.75, 0] // 빠르고 확실하게 떨어지는 느낌
              },
              opacity: { 
                duration: 1.8, 
                delay: dropDelay, 
                times: [0, 0.1, 0.4, 0.7, 1] 
              },
              scale: { 
                duration: 1.8, 
                delay: dropDelay, 
                times: [0, 0.2, 0.5, 0.8, 1],
                ease: [0.5, 0, 0.75, 0]
              }
            }}
          >
            <svg 
              width={dropSize * 2.5} 
              height={dropSize * 2.5} 
              viewBox="0 0 24 24" 
              fill="none"
              className="opacity-100"
              style={{ 
                filter: 'drop-shadow(0 0 25px rgba(13, 153, 255, 1)) drop-shadow(0 0 50px rgba(13, 153, 255, 0.7))',
                transform: 'translateZ(0)'
              }}
            >
              <path
                d="M12 2C12 2 8 5 8 9C8 12.31 10.69 15 14 15C17.31 15 20 12.31 20 9C20 5 16 2 16 2C16 2 14 4 12 2Z"
                fill="#0D99FF"
              />
            </svg>
          </motion.div>

          {/* 제목 - 페이드인 */}
          <motion.div
            className="font-['IBM_Plex_Sans_KR',sans-serif] text-[#f2f2f2] text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 2.5, 
              delay: colorRevealDelay + 0.5
            }}
          >
            <p className="mb-2 md:mb-4">특허법인 청구서</p>
            <p>개선 프로젝트</p>
          </motion.div>
          <AuthorContainer />
        </div>
      </div>
    </motion.section>
  );
}
