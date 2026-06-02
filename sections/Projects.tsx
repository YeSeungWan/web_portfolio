'use client';

export default function Projects() {
  const MY_PORTFOLIO_ADDR = process.env.NEXT_PUBLIC_MY_PORTFOLIO_ADDR ?? "";

  const projects = [
    {
      title: "My Portfolio Web",
      category: "Next.js + Docker(Synology NAS)",
      description: "Next.js와 시놀로지 나스를 기반으로 Docker 컨테이너 환경을 구축한 포트폴리오 프로젝트입니다.",
      tags: ["Next.js", "Docker", "Synology NAS", "GitHub", "JIRA"],
      link: MY_PORTFOLIO_ADDR 
    },
    {
      title: "My Portfolio Embedded - Hardware Independent Architect",
      slug : "Block",
      category: "architecture",
      description: "추상화 기법을 적용한 상용 MCU 간 이식성이 뛰어난 펌웨어 아키텍처 설계에 대한 내용입니다. - 희망 퇴직 이후 정리 예정(6/30 ~)",
      tags: ["Cortex-M0", "C", "HAL_LIB"],
      link: null
    },
    {
      title: "My Portfolio Embedded - OTA",
      slug: "Block",
      category: "Cortex-M0 - OTA Architect",
      description: "Cortex-M0 MCU 환경에서 OTA 개발에 대한 내용 입니다. - 희망 퇴직 이후 정리 예정(6/30 ~)",
      tags: ["Cortex-M0", "Memory Map", "FSM", "Fail Safety"],
      link: null
    }
  ];
  
  return (
    <section id="projects" className="py-20 font-sans">
      <h2 className="font-mono text-2xl font-bold text-green-400 mb-12">[03. Selected Projects]</h2>
      
      {/* 2단 반응형 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div 
            key={index} 
            className="group relative bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-green-500 mb-2 block">{proj.category}</span>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                {proj.description}
              </p>
            </div>

            <div>
              {/* 태그 묶음 */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="font-mono text-[11px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 소스코드 링크 (있는 경우에만 표시) */}
              {proj.link && (
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-white font-mono hover:text-green-400 underline underline-offset-4"
                >
                  View Repository &rarr;
                </a>
              )}
              {/* 상세 페이지 이동 버튼 */}
              {proj.slug && (
                <a href={`/projects/${proj.slug}`} className="text-xs text-white font-mono hover:text-green-400 underline">
                  View Details &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}