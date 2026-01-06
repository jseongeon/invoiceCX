import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import invoiceImage from '../../assets/c7b9a357c3e9a6fb1bbd6b8b9988d92b07d1d321.png';
import svgPaths from "../../imports/svg-3fz40ijnxy";

export default function Section4() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); // 애니메이션 완료 여부

  const points = [
    {
      text: "브랜드 컬러(BLUE) 톤을 살릴 수 있도록 변경",
      top: 278.36,
      arrowWidth: 201.226,
      arrowLeft: 614.26,
      arrowPath: svgPaths.p21b91a20
    },
    {
      text: "자동 수식으로, 비용 계산이 자동으로 되도록 효율성 제고",
      top: 450.87,
      arrowWidth: 201.226,
      arrowLeft: 614.26,
      arrowPath: svgPaths.p21b91a20
    },
    {
      text: "QR 결제 링크 삽입으로 고객 편의성 제고",
      top: 650.39,
      arrowWidth: 201.226,
      arrowLeft: 614.26,
      arrowPath: svgPaths.p21b91a20
    },
    {
      text: "mailto · tel: 기능으로 고객 편의성 제고",
      top: 752.11,
      arrowWidth: 397.127,
      arrowLeft: 418.36,
      arrowPath: svgPaths.pc014f00
    }
  ];

  const totalSteps = points.length + 1; // 타이틀 + 4개 항목

  // 화면 크기 감지
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // 모바일에서는 실행 안함

    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 섹션의 중앙이 화면 중앙에 위치할 때 활성화
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const isCentered = Math.abs(sectionCenter - viewportCenter) < viewportHeight * 0.25;
      const isInView = isCentered && rect.top < viewportHeight && rect.bottom > 0;

      // 완료된 섹션은 다시 잠그지 않음
      if (isInView && !isLocked && !isCompleted) {
        setIsActive(true);
        // 즉시 스크롤 잠금 (딜레이 제거)
        setIsLocked(true);
        setCurrentStep(0);
      } else if (!isInView && rect.top > viewportCenter) {
        // 섹션이 아직 화면에 안 들어왔을 때만 리셋 (위로 스크롤해서 돌아올 때)
        setIsActive(false);
        setIsLocked(false);
        setCurrentStep(0);
        setIsCompleted(false); // 위로 돌아가면 완료 상태 리셋
      }
    };

    // 초기 확인
    checkVisibility();

    // 스크롤 이벤트 리스너 - requestAnimationFrame으로 성능 최적화
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [isDesktop, isLocked, isCompleted]);

  useEffect(() => {
    if (!isDesktop || !isActive || !isLocked) return; // 데스크탑에서만 실행

    let scrollTimeout: NodeJS.Timeout;
    let accumulatedDelta = 0;
    const SCROLL_THRESHOLD = 5; // 스크롤 감도 조절 (더 민감하게)

    const handleWheel = (e: WheelEvent) => {
      if (isLocked && currentStep <= totalSteps) {
        e.preventDefault();

        accumulatedDelta += e.deltaY;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // 누적된 스크롤이 임계값을 넘으면 실행
          if (Math.abs(accumulatedDelta) >= SCROLL_THRESHOLD) {
            // 아래로 스크롤
            if (accumulatedDelta > 0) {
              setCurrentStep(prev => {
                const next = prev + 1;
                if (next > totalSteps) {
                  // 완료 표시 후 잠금 해제
                  setIsCompleted(true);
                  setTimeout(() => {
                    setIsLocked(false);
                  }, 200);
                  return prev;
                }
                return next;
              });
            }
            // 위로 스크롤
            else if (accumulatedDelta < 0) {
              setCurrentStep(prev => Math.max(0, prev - 1));
            }
            accumulatedDelta = 0; // 리셋
          }
        }, 20); // 디바운스 시간 단축 (50ms → 20ms)
      }
    };

    if (isLocked) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      clearTimeout(scrollTimeout);
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isDesktop, isActive, isLocked, currentStep, totalSteps]);

  return (
    <section ref={sectionRef} className="relative bg-[#f2f2f2] w-full min-h-screen overflow-hidden py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
        {/* 청구서와 텍스트를 가로로 배치 - 상대 위치 레이아웃 */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-start w-full max-w-7xl">
          {/* Image - 섹션 진입 시 바로 표시 */}
          <motion.div
            className="w-full lg:w-1/2 max-w-md lg:max-w-none mx-auto lg:mx-0 relative"
            initial={{ opacity: 0, x: -80 }}
            // 데스크탑: isActive 기반, 모바일: whileInView 기반
            animate={isDesktop ? (isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }) : undefined}
            whileInView={!isDesktop ? { opacity: 1, x: 0 } : undefined}
            viewport={!isDesktop ? { once: false, amount: 0.1, margin: "-100px" } : undefined}
            transition={{ duration: 1 }}
          >
            <img
              src={invoiceImage}
              alt="청구서"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* POINT Title - 청구서 이미지 오른쪽, 상단과 같은 높이 */}
          <motion.div
            className="absolute top-0 left-full lg:left-1/2 ml-4 md:ml-6 lg:ml-8 font-['IBM_Plex_Sans_KR',sans-serif] text-[#303634] font-bold z-10"
            initial={{ opacity: 0, y: -40 }}
            // 데스크탑: currentStep 기반, 모바일: whileInView 기반
            animate={isDesktop ? (currentStep >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }) : undefined}
            whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
            viewport={!isDesktop ? { once: false, amount: 0.1, margin: "-100px" } : undefined}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight tracking-tight">POINT</h2>
          </motion.div>

          {/* Points - 절대 위치로 청구서 특정 부분과 연결 */}
          <div className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:h-full flex flex-col justify-between lg:py-8">
            {points.map((point, index) => {
              // 각 항목의 수직 위치 계산 (청구서 이미지의 특정 부분과 정렬)
              const positions = ['28%', '38%', '59%', '67%']; // 1.의뢰내용, 2.합계금액, 3.QR코드, 4.문의사항

              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 lg:absolute lg:left-0"
                  style={{ top: positions[index] }}
                  initial={{ opacity: 0, x: -20 }}
                  // 데스크탑: currentStep 기반, 모바일: whileInView 기반
                  animate={isDesktop ? (currentStep >= index + 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }) : undefined}
                  whileInView={!isDesktop ? { opacity: 1, x: 0 } : undefined}
                  viewport={!isDesktop ? { once: false, amount: 0.1, margin: "-100px" } : undefined}
                  transition={{ duration: 0.6, delay: !isDesktop ? 0.2 + index * 0.15 : 0 }}
                >
                  {/* Long Arrow pointing from invoice */}
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-10" fill="none" viewBox="0 0 64 40">
                      <path d="M4 20h56m-12-12l12 12-12 12" stroke="#152C2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Text */}
                  <p className="font-['IBM_Plex_Sans_KR',sans-serif] text-black text-sm md:text-base lg:text-lg leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}