'use client';

import { useState } from 'react';

const EXPERIENCE_DATA = [
  {
    year: "2026 ~ 현재",
    role: "다중 통신 및 MindMotion/TI MCU 기반 제품 개발 · PL",
    category: "Embedded Firmware Architecture / PL",
    techStack: ["MindMotion", "TI MCU", "Cortex-M", "OTA Protocol", "Failsafe"],
    summary: "특정 제조사 종속성을 탈피한 독립형 FW 아키텍처 설계 및 고신뢰성 복구 모드 시스템 구축을 총괄하고 있습니다.",
    achievements: [
      "Pin Mapping 최적화: 레퍼런스 매뉴얼 분석 기반 주변장치 채널 충돌 방지 및 자원 최적 분배",
      "벤더 독립형 HAL 설계: 특정 제조사 종속성이 없는 드라이버 포팅 아키텍처 및 검토 환경 확보",
      "공급망 리스크 방어: 단가·납기·수급 안정을 고려한 타겟 MCU 소싱 및 HW/구매 부서 협의 주도",
      "통신 동기화 알고리즘: TI MCU 기반 이기종 다중 통신 채널 데이터의 유실 없는 동기화 메커니즘 구현",
      "독자 OTA 프로토콜: 시퀀스 번호, 타임아웃, 예외 로그 필드를 직접 정의한 고신뢰성 패킷 설계",
      "Anti-Brick 아키텍처: Swap 앱 비정상 동작 및 무결성 검증 실패 시 최후방 복구 모드 전환 로직 구현",
      "Failsafe 시스템: 부팅 연속 5회 실패 시 다운 방지 및 안전 대기 상태 전환 카운팅 알고리즘 설계",
      "데이터 무결성 방어: 다운로드 중 전원 차단 등 예외 상황에 대응하는 FSM 기반 Swap 알고리즘 구현",
      "Post-Build 자동화: 컴파일 완료 시 CRC32/메모리 자동 산출 스크립트 구축 및 데이터 무결성 100% 확보",
      "가이드라인 자산화: OTA 메모리 맵 및 플로우차트 문서화를 통해 팀 내 정기 코드 리뷰 주도"
    ]
  },
  {
    year: "2025년",
    role: "다중 MCU 플랫폼 제품 개발 및 양산 프로세스 고도화",
    category: "Mass Production & Platform Engineering",
    techStack: ["STM32", "Abov", "PIC MCU", "Ring Buffer", "Non-blocking FSM", ".NET"],
    summary: "주력 제품의 선행 개발부터 대량 양산까지 전 과정을 총괄하며 하드웨어 변동 및 부품 단종 리스크에 선제 대응했습니다.",
    achievements: [
      "양산 총괄 성공: 아키텍처 설계부터 양산까지 FW 전 과정 주도 (사내 공식 홈페이지 메인 모델 론칭)",
      "비동기 통신 구조화: ISR 내 링 버퍼 적재 및 Main Loop FSM 파싱 기반 Non-blocking 구조 구현",
      "하이브리드 제어 설계: 표준 HAL 함수 기반에 타이밍 크리티컬 구간 레지스터 제어 교차 적용",
      "출고 납기 사수: 양산 초도 중 HW 변경 사항 누락 이슈 대응을 위해 생산 라인 공조 및 교차 검증 주도",
      "단종 리스크 수습: 선행 모듈 단종 발생 시 데이터시트 분석 및 인터페이스 호환성 검증으로 양산 사수",
      "타사 MCU 드라이버 이식: STM32에서 가성비 라인업(Abov 등)으로의 주변장치 드라이버 이식 완수",
      "레거시 소스 최적화: PIC MCU 등 5건 모듈화 및 변수 스코프 엄격화를 통해 Flash/RAM 자원 30% 절감",
      "외주 개발사 관리: TI MCU 기반 신규 제품 외주 커뮤니케이션 전담 및 핵심 알고리즘 검수 협업",
      "코딩 규칙 표준화: 사내 펌웨어 Coding Convention 수립 및 브리핑으로 공동 리뷰 기반 마련",
      "검증 도구 개발: .NET 기반 FW 동작 검증 프로그램 자체 개발 및 오실로스코프 활용 HW 디버깅 공조",
      "펌웨어 기술 멘토링: IPP 교육(OJT) 기술 멘토로서 후배 사원 직무 적응 및 상생 문화 구축"
    ]
  },
  {
    year: "2024년",
    role: "저전력/레거시 MCU 기반 제품 개발 및 아키텍처 최적화",
    category: "Legacy Optimization & Low-level Drivers",
    techStack: ["8/16-bit MCU", "Low-level Reg", "FSM Control", "IWDG", "Low Power"],
    summary: "하드웨어 매뉴얼 분석을 기반으로 로우 레벨 주변장치 드라이버를 구현하고 기존 아키텍처를 슬림화했습니다.",
    achievements: [
      "로우 레벨 드라이버 구현: 데이터시트 분석 기반 GPIO, UART, Timer, PWM, 세그먼트 LCD 구동 제어",
      "FSM 시나리오 설계: 벤더 레벨에 구애받지 않는 안정적인 상태 천이 및 시나리오 구동 로직 수립",
      "런타임 안정성 확보: 독립형 와치독(IWDG) 및 저전력 모드 예외 처리 프로세스 구축",
      "메모리 마진 확보: 변수 스코프 최적화 및 함수 모듈화를 통해 레거시 제품 Flash/RAM 각각 30% 절감"
    ]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    /* 💡 [정렬 싱크 매칭] max-w-6xl mx-auto px-4 md:px-0 레이아웃을 완전히 통일하여 다른 섹션과 좌우 정렬을 칼같이 일치시킵니다. */
    <section id="experience" className="py-16 md:py-20 font-sans border-b border-zinc-900 max-w-6xl mx-auto px-4 md:px-0">
      
      {/* 타이틀 영역 */}
      <div className="mb-8 md:mb-12">
        <h2 className="font-mono text-2xl font-bold text-green-400">
          [02. Work Experience]
        </h2>
        <div className="mt-3 md:mt-4 text-xs md:text-sm text-zinc-500 flex flex-wrap items-center gap-2 font-mono">
          <span>제일 일렉트릭</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-zinc-600 sm:text-zinc-500">2023.12 ~ 2026.06 (희망퇴직 예정)</span>
        </div>
      </div>

      {/* 카드 리스트 영역 */}
      <div className="space-y-4 md:space-y-6">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div key={idx} className="border border-zinc-800 rounded-xl bg-zinc-950/30 overflow-hidden hover:border-zinc-700 transition-colors">
            
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-5 md:p-8 flex items-start justify-between gap-4 group bg-zinc-900/20 cursor-pointer"
            >
              <div className="space-y-1 md:space-y-2 flex-1 min-w-0">
                <div className="text-green-500 text-[9px] md:text-[10px] font-bold tracking-widest uppercase truncate">
                  {exp.category}
                </div>
                <div className="text-sm md:text-xl font-bold text-white group-hover:text-green-400 transition-colors break-words pr-2 leading-snug">
                  {exp.year} · {exp.role.split('·')[0].trim()}
                </div>
                <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed">{exp.summary}</p>
              </div>
              
              <div className="text-zinc-500 group-hover:text-green-400 shrink-0 font-mono text-[10px] md:text-xs border border-zinc-800 group-hover:border-green-500/30 px-2 md:px-3 py-1 rounded transition-colors self-center md:self-auto md:mt-6">
                {openIndex === idx ? 'CLOSE' : 'OPEN'}
              </div>
            </button>

            {/* 어치브먼트 토글 영역 */}
            <div 
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 pt-0 md:p-8 md:pt-0 border-t border-zinc-800 bg-zinc-950/50">
                  <div className="space-y-6 md:space-y-8">
                    {exp.achievements.map((ach, aIdx) => {
                      const colonIndex = ach.indexOf(':');
                      const title = colonIndex !== -1 ? ach.substring(0, colonIndex).trim() : ach;
                      const content = colonIndex !== -1 ? ach.substring(colonIndex + 1).trim() : null;
                      
                      return (
                        <div key={aIdx} className={`border-l border-zinc-800 pl-4 md:pl-6 ${aIdx === 0 ? 'mt-6 md:mt-8' : ''}`}>
                          <h4 className="text-green-400 font-bold text-xs md:text-sm leading-tight break-words">
                            {title}
                          </h4>
                          {content && (
                            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-2 md:mt-3 break-words">
                              {content}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 md:gap-2 pt-6 mt-6 border-t border-zinc-900">
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-[9px] md:text-[10px] px-2 py-0.5 md:py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}