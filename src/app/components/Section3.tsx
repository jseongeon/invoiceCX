import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export default function Section3() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); // 애니메이션 완료 여부

  const points = [
    {
      number: "1",
      title: "브랜드 컬러",
      description: "법인 분사 이후에도 법무법인 브랜드 컬러를 사용하고 있던 현황에서,\n기존 특허법인 테헤란의 브랜드 컬러를 활용하는 청구서로 개선"
    },
    {
      number: "2",
      title: "mailto 기능",
      description: "PC유저를 위한 mailto기능 삽입으로, 문의사항이 있을 경우,\n청구서 이탈없이 바로 담당부서로 메일 문의를 할 수 있도록 유도"
    },
    {
      number: "3",
      title: "tel: 기능",
      description: "모바일유저를 위한 tel: 기능 삽입으로, 문의사항이 있을 경우,\n청구서 이탈없이 바로 담당부서로 유선 문의를 할 수 있도록 유도"
    },
    {
      number: "4",
      title: "QR 결제 링크",
      description: "고객의 결제 및 입금 시 편의성과 고객 이탈 방지를 위해,\n해당 청구서 안에서 자동으로 결제 및 입금 사이트로 이동할 수 있도록 유도"
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

      // 섹션의 상단이 화면 하단 30% 지점에 도달하면 활성화
      const triggerPoint = viewportHeight * 0.3;
      const isInView = rect.top <= triggerPoint && rect.bottom > viewportHeight * 0.2;

      // 완료된 섹션은 다시 잠그지 않음
      if (isInView && !isLocked && !isCompleted) {
        setIsActive(true);
        setIsLocked(true);
        setCurrentStep(0);
      } else if (!isInView && rect.top > triggerPoint) {
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
        {/* Title */}
        <motion.div
          className="font-['IBM_Plex_Sans_KR',sans-serif] text-[#303634] font-bold text-center tracking-tight leading-tight"
          initial={{ opacity: 0, y: 40 }}
          // 데스크탑: currentStep 기반, 모바일: whileInView 기반
          animate={isDesktop ? (currentStep >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }) : undefined}
          whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
          viewport={!isDesktop ? { once: false, amount: 0.1, margin: "-100px" } : undefined}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl">고객이 다시 찾는 힘, CX</h2>
        </motion.div>

        {/* Grid of points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full max-w-7xl">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-3 md:gap-4 items-start"
              initial={{ opacity: 0, y: 40 }}
              // 데스크탑: currentStep 기반, 모바일: whileInView 기반
              animate={isDesktop ? (currentStep >= index + 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }) : undefined}
              whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
              viewport={!isDesktop ? { once: false, amount: 0.1, margin: "-100px" } : undefined}
              transition={{ duration: 0.6, delay: !isDesktop ? index * 0.2 : 0 }}
            >
              <div className="bg-[#152c2d] flex items-center justify-center rounded-full w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <span className="font-['IBM_Plex_Sans',sans-serif] text-white text-xl md:text-2xl lg:text-3xl">
                  {point.number}
                </span>
              </div>
              <h3 className="font-['IBM_Plex_Sans_KR',sans-serif] text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                {point.title}
              </h3>
              <p className="font-['IBM_Plex_Sans_KR',sans-serif] text-black text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed whitespace-pre-line">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}