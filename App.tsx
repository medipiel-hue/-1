
import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Camera, 
  Truck, 
  Building2, 
  Home, 
  Layers,
  CheckCircle,
  TrendingDown,
  Coins
} from 'lucide-react';

// --- Constants ---
const PHONE_NUMBER = "010-9250-5245";
const PHONE_URL = "tel:01092505245";
const BIZ_NAME = "제로철거";
const CEO_NAME = "김인혁";

// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-4xl mx-auto px-5 h-18 flex items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Layers className="text-white w-6 h-6" />
        </div>
        <span className="font-black text-2xl tracking-tight text-blue-900">{BIZ_NAME}</span>
      </div>
      <a href={PHONE_URL} className="flex items-center gap-1.5 text-blue-600 font-extrabold text-base bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
        <Phone className="w-5 h-5 fill-blue-600" />
        전화상담
      </a>
    </div>
  </header>
);

const Section = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <section className={`py-20 px-6 max-w-4xl mx-auto ${className}`}>
    {children}
  </section>
);

const FloatingCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white/95 to-transparent">
    <div className="max-w-md mx-auto flex gap-3">
      <a 
        href={PHONE_URL}
        className="flex-[1.2] bg-blue-600 hover:bg-blue-700 text-white font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-200 active:scale-95 transition-all"
      >
        <Phone className="w-6 h-6" />
        전화 견적 문의
      </a>
      <a 
        href="#"
        className="flex-1 bg-[#FEE500] hover:bg-[#FADA0A] text-[#3c1e1e] font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
      >
        <MessageCircle className="w-6 h-6 fill-[#3c1e1e]" />
        카톡 문의
      </a>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-32 bg-white selection:bg-blue-100 break-keep">
      <Header />

      {/* 1. Hero Headline & 2. Sub Hook & 3. Immediate CTA */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 bg-gradient-to-b from-blue-50 via-white to-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-5 py-2 mb-8 md:mb-12 bg-blue-600 text-white rounded-full font-black text-base animate-bounce shadow-md">
            인천 철거비 지원 제도 연계 전문
          </div>
          
          <h1 className="text-[40px] md:text-7xl font-black text-gray-900 leading-[1.2] md:leading-[1.35] mb-12 md:mb-16 tracking-tighter">
            <span className="text-blue-600 italic">정직한</span> 철거 견적,<br />
            <span className="relative inline-block">
              추가 비용 없는
              <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100 -z-10 opacity-70"></span>
            </span><br />
            현장 마무리
          </h1>

          <div className="space-y-6 md:space-y-8 mb-16 md:mb-20">
            <p className="text-gray-600 text-xl md:text-2xl font-bold leading-snug">
              지원 제도 활용 시<br className="md:hidden" />
              <span className="text-blue-700 font-black"> 수백만 원 단위 비용 절감 사례</span> 다수
            </p>
            <p className="text-gray-950 text-xl md:text-2xl font-black leading-snug">
              <span className="border-b-4 border-blue-200">사진 한 장이면</span><br className="md:hidden" /> 
              지원 여부 포함 즉시 견적 가능
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
             <div className="flex items-center justify-center gap-3 text-gray-700 text-lg md:text-xl font-bold">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-blue-600" /> 인천 무료 방문
             </div>
             <div className="flex items-center justify-center gap-3 text-gray-700 text-lg md:text-xl font-bold">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-blue-600" /> 지원금 연계 상담
             </div>
             <div className="flex items-center justify-center gap-3 text-gray-700 text-lg md:text-xl font-bold">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-blue-600" /> 부담 없는 상담
             </div>
          </div>
        </div>
      </section>

      {/* Cost Support Highlight Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-[40px] p-10 md:p-14 border-2 border-blue-100 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="bg-blue-600 p-7 rounded-full shadow-lg shadow-blue-200 flex-shrink-0 animate-pulse">
              <Coins className="text-white w-14 h-14 md:w-16 md:h-16" />
            </div>
            <div className="text-center md:text-left w-full">
              <h2 className="text-2xl md:text-4xl font-black text-blue-900 mb-8 leading-tight">
                인천 사장님을 위한<br /> 
                <span className="text-blue-600">철거 비용 절감 시스템</span>
              </h2>
              <ul className="space-y-8 text-gray-700 font-bold text-lg md:text-xl">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <span className="hidden md:inline text-blue-600">•</span> 
                  <span className="text-center md:text-left">
                    희망리턴패키지 등<br className="md:hidden" />
                    <span className="text-blue-800"> 국가/지역 지원 제도 적극 연계</span>
                  </span>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <span className="hidden md:inline text-blue-600">•</span> 
                  <span className="text-center md:text-left">
                    사례에 따라<br className="md:hidden" />
                    <span className="text-blue-800"> 실제 부담금 대폭 절감 가능</span>
                  </span>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <span className="hidden md:inline text-blue-600">•</span> 
                  <span className="text-center md:text-left">
                    지원 자격 및 절차를<br className="md:hidden" />
                    <span className="text-blue-800 underline"> 무료로 바로 확인해 드립니다</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Target Audience */}
      <Section className="bg-white">
        <h2 className="text-3xl md:text-4xl font-black mb-16 text-center text-gray-900 leading-tight">
          이런 분들께<br className="md:hidden" /> <span className="text-blue-600 underline underline-offset-8">추천</span>합니다
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "상가 원상복구", desc: "지원 제도를 통해 철거비를\n절약하고 싶은 임차인 분", icon: Building2 },
            { title: "리모델링 전 내부 철거", desc: "공사 시작 전 깔끔한 바탕과\n정직한 견적이 필요한 분", icon: Home },
            { title: "추가 비용 걱정", desc: "현장에서 갑자기 말을 바꾸는\n업체가 두려운 분", icon: ShieldCheck },
            { title: "폐기물 동시 처리", desc: "철거부터 폐기물 수거까지\n한 번에 끝내고 싶은 분", icon: Truck },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border-2 border-transparent hover:border-blue-100 transition-all flex items-start gap-6 shadow-sm">
              <div className="bg-white p-4 rounded-2xl shadow-md text-blue-600 border border-gray-100">
                <item.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium whitespace-pre-line">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Services */}
      <Section className="bg-gray-900 text-white rounded-[48px] my-10 overflow-hidden relative py-24">
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <Layers className="w-64 h-64" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-12 relative px-2">제공 서비스</h2>
        <div className="space-y-6 relative">
          {[
            "상가 내부 철거 및 원상복구 전문",
            "주택/사무실 전체 및 내부 철거",
            "부분 철거 (가벽, 바닥, 천장 타일 등)",
            "철거 후 폐기물 수거 및 깔끔한 정리"
          ].map((service, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <ArrowRight className="w-6 h-6 text-blue-400" />
              <span className="text-xl md:text-2xl font-bold">{service}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Trust Points */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-gray-900 leading-tight">
          인천 {BIZ_NAME}가<br className="md:hidden" /> <span className="text-blue-600 underline underline-offset-8 font-black">신뢰</span>받는 이유
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "인천 시공 경력", val: "15년+" },
            { label: "누적 현장", val: "3,200+" },
            { label: "비용 절감율", val: "상담후결정" },
            { label: "만족도", val: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white border-2 border-gray-50 rounded-3xl shadow-lg shadow-gray-100">
              <div className="text-blue-600 font-black text-2xl md:text-3xl mb-2 tracking-tight">{stat.val}</div>
              <div className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-5 p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <TrendingDown className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p className="text-gray-800 font-black text-lg md:text-xl leading-relaxed">
              지원 사업 연계 시<br className="md:hidden" />
              <span className="text-blue-700 underline decoration-2 decoration-blue-300"> 최대 수백만 원까지 절감 가능한 사례</span>를 다수 보유하고 있습니다.
            </p>
          </div>
          <div className="flex items-center gap-5 p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <CheckCircle className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p className="text-gray-800 font-black text-lg md:text-xl leading-relaxed">
              현장 사진 한 장으로<br className="md:hidden" />
              <span className="text-blue-700 underline decoration-2 decoration-blue-300"> 정확한 철거 견적과 지원 가능성</span>을 동시에 안내합니다.
            </p>
          </div>
        </div>
      </Section>

      {/* 7. Differentiation */}
      <Section className="bg-blue-50/50 border-y border-blue-100">
        <div className="text-center max-w-3xl mx-auto py-12">
          <blockquote className="text-2xl md:text-4xl font-black text-gray-900 leading-[1.4]">
            “인천 철거는 업체마다 결과가 다릅니다.<br /> 
            <span className="text-blue-600 block mt-2 md:inline md:mt-0">가격보다 중요한 건 완벽한 마무리</span>입니다.”
          </blockquote>
          <p className="mt-10 text-gray-600 text-lg md:text-xl leading-relaxed font-semibold">
            단순히 부수는 것에서 끝나지 않습니다.<br />
            다음 공정이 막힘 없이 진행될 수 있도록<br className="md:hidden" />
            깔끔하게 비워드립니다.
          </p>
        </div>
      </Section>

      {/* 8. Process */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-black mb-16 text-center text-gray-900 underline underline-offset-8">작업 진행 과정</h2>
        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-12">
            {[
              { step: "01", title: "전화/카톡 상담", desc: "상황 설명 후 사진을 보내주시면 즉시 지원 제도 연계 가능 여부를 확인합니다." },
              { step: "02", title: "현장 확인 & 견적 안내", desc: "인천 전지역 무료 방문 또는 사진 기반 예상 지원금 포함 견적을 드립니다." },
              { step: "03", title: "계약 및 일정 확정", desc: "확정된 견적 외 추가 비용 없이 최우선적으로 일정을 잡습니다." },
              { step: "04", title: "전문 철거 작업", desc: "숙련된 베테랑 기술자가 안전하고 신속하게 작업을 진행합니다." },
              { step: "05", title: "현장 정리 및 마무리", desc: "폐기물 수거 후 깔끔하게 청소하여 현장을 완벽히 인도합니다." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start gap-6 md:gap-10 relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center font-black text-xl md:text-2xl shadow-xl shadow-blue-200 flex-shrink-0 z-10">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-black text-2xl md:text-3xl text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg md:text-xl leading-[1.6] font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Secondary CTA */}
      <section className="bg-blue-700 py-24 px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-10 italic leading-[1.3]">
          "실제 부담 금액이<br className="md:hidden" /> 크게 달라질 수 있습니다."
        </h2>
        <p className="text-blue-100 mb-14 text-xl md:text-2xl opacity-95 font-bold leading-relaxed">
          지원 제도 적용 여부만<br className="md:hidden" /> 물어보셔도 괜찮습니다.<br />
          가장 정직한 답변을 약속드립니다.
        </p>
        <div className="flex flex-col gap-5 max-w-sm mx-auto">
            <a href={PHONE_URL} className="bg-white text-blue-700 font-black text-2xl py-6 rounded-3xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                <Phone className="w-7 h-7" /> 지원 혜택 및 견적 문의
            </a>
            <div className="text-white text-2xl mt-4 font-black tracking-widest">{PHONE_NUMBER}</div>
            <div className="text-blue-200 text-base mt-2 font-bold opacity-80 underline underline-offset-4 leading-snug">
              상담 가능 시간<br className="md:hidden" />
              08:00 ~ 20:00 (연중무휴)
            </div>
        </div>
      </section>

      {/* 10. Final Trust Message & Footer */}
      <footer className="py-24 px-6 text-center bg-gray-50 border-t border-gray-100">
        <div className="mb-14">
          <Layers className="w-12 h-12 text-blue-300 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-black text-gray-900 leading-[1.6] max-w-xl mx-auto">
            철거는 단순히 부수는 일이 아니라,<br />
            <span className="text-blue-600">성공적인 다음 단계로 가는<br className="md:hidden" /> 가장 중요한 시작</span>입니다.
          </p>
        </div>
        
        <div className="pt-12 border-t border-gray-200 text-gray-500 text-base max-w-2xl mx-auto">
          <div className="space-y-4 mb-10">
            <p className="font-bold text-gray-900 text-xl leading-snug">상호: {BIZ_NAME} | 대표자: {CEO_NAME}</p>
            <p className="font-bold text-blue-600 text-xl leading-snug">문의 전화: {PHONE_NUMBER}</p>
          </div>
          <p className="text-sm leading-[1.7] mb-8 opacity-70">
            본 페이지는 인천 지역 소상공인 및 임차인을 위한<br className="md:hidden" /> 철거 지원 제도 안내를 목적으로 합니다.<br />
            정확한 지원 금액은 개별 상황 및 제도 운영 지침에 따라<br className="md:hidden" /> 달라질 수 있으며,<br className="hidden md:block" />
            제로철거는 고객님이 최적의 혜택을 받으실 수 있도록<br className="md:hidden" /> 최선을 다해 조력합니다.
          </p>
          <p className="font-black text-gray-900 tracking-tight text-lg">© 2026 {BIZ_NAME}. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Persistent Mobile CTA Buttons */}
      <FloatingCTA />
    </div>
  );
};

export default App;
