import svgPaths from "./svg-3fz40ijnxy";
import imgImage from "figma:asset/b43080753f98ae2c071efb7e32c09661faed7622.png";
import imgImage1 from "figma:asset/fd06457f1c85cd1fb4fba9cf234ad7c66e7ed29c.png";

function AuthorContainer() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Medium',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#f2f2f2] text-[40px] text-nowrap w-full" data-name="Author Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">By</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">정성언</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[500px] h-[806px] items-start left-[143px] top-[179px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[#f2f2f2] text-[96px] tracking-[-2.112px] w-[1144px]">
        <p className="mb-0">특허법인 청구서</p>
        <p>개선 프로젝트</p>
      </div>
      <AuthorContainer />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#152c2d] h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="section1">
      <div className="absolute left-[1331px] size-[449px] top-[536px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 449 449">
          <circle cx="224.5" cy="224.5" fill="var(--fill-0, #F2F2F2)" id="Ellipse 2" r="224.5" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(100%-109px)] size-[65px] top-[43px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[65px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
              <circle cx="32.5" cy="32.5" fill="var(--fill-0, #0D99FF)" id="Ellipse 3" r="32.5" />
            </svg>
          </div>
        </div>
      </div>
      <Container />
      <div className="absolute backdrop-blur-[75px] backdrop-filter bg-[rgba(48,99,100,0.56)] h-[1080px] left-[1575px] top-0 w-[345px]" data-name="Rounded Rectangle" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start leading-[0] left-[834px] not-italic top-[301px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#303634] text-[96px] tracking-[-2.112px] w-[857px]">
        <p className="leading-[1.2]">WHY?</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center relative shrink-0 text-[36px] text-black tracking-[-0.792px] w-[939.535px]">
        <p className="leading-[1.5] mb-0">기존 청구서의 단점</p>
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[54px]">
            <span className="leading-[1.5]">고객이 해당 청구서에서 문의하려면 청구서를 이탈해야함</span>
          </li>
          <li className="ms-[54px]">
            <span className="leading-[1.5]">결제 링크가 연결되지 않아 계좌번호를 메모해야 하는 불편</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[1080px] left-[2160px] overflow-clip top-0 w-[1920px]" data-name="section2">
      <div className="absolute h-[1080px] left-0 rounded-[8px] top-0 w-[683px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
      <Container1 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#152c2d] content-stretch flex flex-col items-center justify-center px-[23.78px] py-[9.661px] relative rounded-[65.395px] shrink-0 size-[80px]" data-name="Icon Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
        <p className="leading-[1.5]">1</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Container">
      <IconContainer />
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-black w-[min-content]">
        <p className="leading-[normal]">브랜드 컬러</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[24px] text-black w-[744px]">
        <p className="mb-0">법인 분사 이후에도 법무법인 브랜드 컬러를 사용하고 있던 현황에서,</p>
        <p>기존 특허법인 테헤란의 브랜드 컬러를 활용하는 청구서로 개선</p>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#152c2d] content-stretch flex flex-col items-center justify-center px-[23.78px] py-[9.661px] relative rounded-[65.395px] shrink-0 size-[80px]" data-name="Icon Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
        <p className="leading-[1.5]">2</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Container">
      <IconContainer1 />
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-[495px]">
        <p className="leading-[normal]">mailto 기능</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[744px]">
        <p className="leading-[normal]">
          PC유저를 위한 mailto기능 삽입으로, 문의사항이 있을 경우,
          <br aria-hidden="true" />
          청구서 이탈없이 바로 담당부서로 메일 문의를 할 수 있도록 유도
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[#152c2d] content-stretch flex flex-col items-center justify-center px-[23.78px] py-[9.661px] relative rounded-[65.395px] shrink-0 size-[80px]" data-name="Icon Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
        <p className="leading-[1.5]">3</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Container">
      <IconContainer2 />
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-[495px]">
        <p className="leading-[normal]">tel: 기능</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[744px]">
        <p className="leading-[normal]">
          모바일유저를 위한 tel: 기능 삽입으로, 문의사항이 있을 경우,
          <br aria-hidden="true" />
          청구서 이탈없이 바로 담당부서로 유선 문의를 할 수 있도록 유도
        </p>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#152c2d] content-stretch flex flex-col items-center justify-center px-[23.78px] py-[9.661px] relative rounded-[65.395px] shrink-0 size-[80px]" data-name="Icon Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
        <p className="leading-[1.5]">4</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Container">
      <IconContainer3 />
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-[495px]">
        <p className="leading-[normal]">QR 결제 링크</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[24px] text-black w-[744px]">
        <p className="mb-0">고객의 결제 및 입금 시 편의성과 고객 이탈 방지를 위해,</p>
        <p>해당 청구서 안에서 자동으로 결제 및 입금 사이트로 이동할 수 있도록 유도</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start justify-center left-1/2 top-[422px] translate-x-[-50%]" data-name="Container">
      <Container4 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[31px] left-[143px] top-[88px] w-[1634px]" data-name="Container" />;
}

function Section2() {
  return (
    <div className="absolute bg-white h-[1080px] left-[4320px] overflow-clip top-0 w-[1920px]" data-name="section3">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] left-[960.5px] not-italic text-[#303634] text-[72px] text-center text-nowrap top-[265px] tracking-[-1.584px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.5]">
          <span>{`고객이 다시 찾는 힘, `}</span>
          <span className="text-[#303634]">CX</span>
        </p>
      </div>
      <Container8 />
      <Container9 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[1080px] left-[6480px] overflow-clip top-0 w-[1920px]" data-name="section4">
      <div className="absolute h-[1080px] left-0 rounded-[8px] top-0 w-[683px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] left-[834px] not-italic text-[36px] text-black top-[278.36px] tracking-[-0.792px] translate-y-[-50%] w-[939.535px]">
        <p className="leading-[1.5]">브랜드 컬러(BLUE) 톤을 살릴 수 있도록 변경</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] left-[834px] not-italic text-[36px] text-black top-[450.87px] tracking-[-0.792px] translate-y-[-50%] w-[939.535px]">
        <p className="leading-[1.5]">자동 수식으로, 비용 계산이 자동으로 되도록 효율성 제고</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] left-[834px] not-italic text-[36px] text-black top-[650.39px] tracking-[-0.792px] translate-y-[-50%] w-[939.535px]">
        <p className="leading-[1.5]">QR 결제 링크 삽입으로 고객 편의성 제고</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] left-[834px] not-italic text-[36px] text-black top-[752.11px] tracking-[-0.792px] translate-y-[-50%] w-[939.535px]">
        <p className="leading-[1.5]">mailto · tel: 기능으로 고객 편의성 제고</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] left-[851.4px] not-italic text-[#303634] text-[96px] top-[98.92px] tracking-[-2.112px] translate-y-[-50%] w-[857px]">
        <p className="leading-[1.2]">POINT</p>
      </div>
      <div className="absolute h-0 left-[614.26px] top-[278.36px] w-[201.226px]">
        <div className="absolute inset-[-14.73px_-0.99%_-14.73px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203.226 29.4558">
            <path d={svgPaths.p21b91a20} fill="var(--stroke-0, #152C2D)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[614.26px] top-[450.87px] w-[201.226px]">
        <div className="absolute inset-[-14.73px_-0.99%_-14.73px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203.226 29.4558">
            <path d={svgPaths.p21b91a20} fill="var(--stroke-0, #152C2D)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[614.26px] top-[650.39px] w-[201.226px]">
        <div className="absolute inset-[-14.73px_-0.99%_-14.73px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203.226 29.4558">
            <path d={svgPaths.p21b91a20} fill="var(--stroke-0, #152C2D)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[418.36px] top-[752.11px] w-[397.127px]">
        <div className="absolute inset-[-14.73px_-0.5%_-14.73px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 399.127 29.4558">
            <path d={svgPaths.pc014f00} fill="var(--stroke-0, #152C2D)" id="Arrow 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentHeader() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content Header">
      <div className="relative shrink-0 size-[9px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, black)" id="Ellipse 9" r="4.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#152c2d] text-[40px] text-nowrap">
        <p className="leading-[normal]">CS 효율화</p>
      </div>
    </div>
  );
}

function ContentBody() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.528px] w-full" data-name="Content Body">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="1">
          <li className="leading-[1.6] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
            <span>{`상담 접수처로 해당 문의 고객 기존 대비 약 `}</span>
            <span className="font-['Inter:Bold',sans-serif] not-italic tracking-[-0.528px]">30% 감소</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="2">
          <li className="leading-[1.6] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
            <span>{`담당 부서로 청구서 관련 직접 연결 고객 약 `}</span>
            <span className="font-['Inter:Bold',sans-serif] not-italic tracking-[-0.528px]">13% 증가</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="3">
          <li className="leading-[1.6] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[24px]">
            <span>{`담당부서 직접 연결이 가능해지면서,    해당 컴플레인 고객 `}</span>
            <span className="font-['Inter:Bold',sans-serif] not-italic tracking-[-0.528px]">약 27% 감소</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start px-[24px] py-0 relative w-full">
          <ContentHeader />
          <ContentBody />
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[24px] relative shrink-0 w-[520px]" data-name="Content Container">
      <div className="bg-[#152c2d] h-[542px] shrink-0 w-[5.531px]" data-name="Icon" />
      <Content />
    </div>
  );
}

function ContentHeader1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content Header">
      <div className="relative shrink-0 size-[9px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, black)" id="Ellipse 9" r="4.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#152c2d] text-[40px] text-nowrap">
        <p className="leading-[normal]">업무 효율 향상</p>
      </div>
    </div>
  );
}

function ContentBody1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.528px] w-full" data-name="Content Body">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="1">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">기존 금액을 계산하여 기입이 아닌, 자동 계산으로 전환 후 관리팀 업무 효율 향상</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="2">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">담당 부서 직접 문의 고객이 증가하면서,기존 전달받는 형식이 아닌 직접 처리 방식으로 변환되어 관리팀 업무 효율 상승</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="3">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">불필요한 CS 자원 낭비 최소화 성공으로 효율성 제고</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="4">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">신규 청구서로 변경 후, 청구서 수령부터 고객 입금까지 평균 0.7일 감소</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start px-[24px] py-0 relative w-full">
          <ContentHeader1 />
          <ContentBody1 />
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[24px] relative shrink-0 w-[520px]" data-name="Content Container">
      <div className="bg-[#152c2d] h-[542px] shrink-0 w-[5.531px]" data-name="Icon" />
      <Content1 />
    </div>
  );
}

function ContentHeader2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content Header">
      <div className="relative shrink-0 size-[9px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, black)" id="Ellipse 9" r="4.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#152c2d] text-[40px] text-nowrap">
        <p className="leading-[normal]">보완점</p>
      </div>
    </div>
  );
}

function ContentBody2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.528px] w-full" data-name="Content Body">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="1">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">{`(모바일) 삼성 자체 노트 기능 사용 시, mailto · tel: 기능 사용 제한 `}</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="2">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">QR코드를 피싱으로 오해하는 고객 존재</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="3">
          <li className="ms-[36px]">
            <span className="leading-[1.6]">청구서는 개선했으나, 업무 효율 상승을 위해서는 n8n 등을 활용한 자동 메일 발송 기능의 필요성 부각</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start px-[24px] py-0 relative w-full">
          <ContentHeader2 />
          <ContentBody2 />
        </div>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip px-[16px] py-[24px] relative shrink-0 w-[520px]" data-name="Content Container">
      <div className="bg-[#152c2d] h-[542px] shrink-0 w-[5.531px]" data-name="Icon" />
      <Content2 />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-start left-[155px] top-[439px]" data-name="Content Section">
      <ContentContainer />
      <ContentContainer1 />
      <ContentContainer2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[1080px] left-[8640px] overflow-clip top-0 w-[1920px]" data-name="section5">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] left-[calc(50%-792px)] not-italic text-[#303634] text-[72px] text-nowrap top-[278px] tracking-[-1.584px] translate-y-[-50%]">
        <p className="leading-[1.5]">IMPROVEMENTS</p>
      </div>
      <ContentSection />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] left-[1457px] not-italic text-[36px] text-black text-nowrap text-right top-[265px] tracking-[-0.792px] translate-x-[-100%] translate-y-[-50%]">
        <ul>
          <li className="list-disc ms-[54px]">
            <span className="leading-[1.5]">CX는 정말 향상했을까?</span>
          </li>
        </ul>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] left-[1457px] not-italic text-[36px] text-black text-nowrap text-right top-[319px] tracking-[-0.792px] translate-x-[-100%] translate-y-[-50%]">
        <ul>
          <li className="list-disc ms-[54px]">
            <span className="leading-[1.5]">업무 효율성은 정말 향상했을까?</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#152c2d] font-['Inter:Semi_Bold',sans-serif] h-[1080px] leading-[0] left-[10800px] not-italic overflow-clip text-[#f2f2f2] text-[96px] text-nowrap top-0 tracking-[-2.112px] w-[1920px]" data-name="section6">
      <div className="absolute flex flex-col justify-center leading-[1.2] left-[calc(50%+853px)] text-right top-[calc(50%+236px)] translate-x-[-100%] translate-y-[-50%]">
        <p className="mb-0">더욱 향상된 CX를 위해서,</p>
        <p>끊임없이 연구하는 자세로.</p>
      </div>
      <div className="absolute flex flex-col justify-center leading-[1.2] left-[calc(50%-792px)] top-[calc(50%-198px)] translate-y-[-50%]">
        <p className="mb-0">조금씩, 그리고 빠르게.</p>
        <p>세심히, 그리고 특별하게.</p>
      </div>
    </div>
  );
}

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}