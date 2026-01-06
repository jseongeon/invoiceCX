import { motion } from 'framer-motion';

function ContentHeader({ title }: { title: string }) {
  return (
    <div className="flex gap-3 md:gap-4 items-center">
      <div className="w-2 h-2 md:w-2.5 md:h-2.5 flex-shrink-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="black" r="4.5" />
        </svg>
      </div>
      <h3 className="font-['IBM_Plex_Sans_KR',sans-serif] text-[#152c2d] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
        {title}
      </h3>
    </div>
  );
}

function ContentCard({ title, items, delay }: { title: string; items: { text: string; bold?: string }[]; delay: number }) {
  return (
    <motion.div
      className="flex gap-3 md:gap-4 items-start p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-[#152c2d] w-1 md:w-1.5 flex-shrink-0 self-stretch min-h-full" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <ContentHeader title={title} />
          <div className="flex flex-col font-['IBM_Plex_Sans_KR',sans-serif] gap-4 md:gap-5 lg:gap-6 text-black">
            {items.map((item, index) => (
              <div key={index} className="w-full">
                <ol className="list-decimal text-sm md:text-base lg:text-lg xl:text-xl" start={index + 1}>
                  <li className="ms-6 md:ms-8 lg:ms-10">
                    <span className="leading-relaxed whitespace-pre-line">{item.text}</span>
                    {item.bold && (
                      <span className="font-bold leading-relaxed">{item.bold}</span>
                    )}
                  </li>
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Section5() {
  const sections = [
    {
      title: "CS 효율화",
      items: [
        { text: "상담 접수처로 해당 문의 고객\n기존 대비 약 ", bold: "30% 감소" },
        { text: "담당 부서로 청구서 관련\n직접 연결 고객 약 ", bold: "13% 증가" },
        { text: "담당부서 직접 연결이 가능해지면서,\n해당 컴플레인 고객 ", bold: "약 27% 감소" }
      ]
    },
    {
      title: "업무 효율 향상",
      items: [
        { text: "기존 금액을 계산하여\n자동 계산으로 전환 후,\n", bold: "관리팀 업무 효율 향상" },
        { text: "담당 부서 직접 문의 고객 증가 후,\n직접 처리 방식으로 변환되어\n", bold: "관리팀 업무 효율 상승" },
        { text: "불필요한 CS 자원 낭비 최소화로\n", bold: "효율성 제고" },
        { text: "신규 청구서로 변경 후,\n청구서 수령부터 고객 입금까지\n", bold: "평균 0.7일 감소" }
      ]
    },
    {
      title: "보완점",
      items: [
        { text: "[📱] 삼성 자체 노트 기능 사용 시,\nmailto · tel: 기능 사용 제한" },
        { text: "QR코드를 피싱으로 오해하는\n고객 존재" },
        { text: "추가 업무 효율 상승을 위해서는\nn8n 등을 활용한\n자동 메일 발송 기능의 필요성 부각" }
      ]
    }
  ];

  return (
    <section className="relative bg-[#f2f2f2] w-full min-h-screen overflow-hidden py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
        <motion.div
          className="font-['IBM_Plex_Sans_KR',sans-serif] text-[#303634] text-center font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight tracking-tight">IMPROVEMENTS</h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl">
          {sections.map((section, index) => (
            <ContentCard
              key={index}
              title={section.title}
              items={section.items}
              delay={0.5 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
