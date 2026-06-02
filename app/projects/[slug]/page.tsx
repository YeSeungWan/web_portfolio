'use client';

// 1. 프로젝트별 데이터를 룩업 테이블 형태로 정의
const PROJECT_DATA: Record<string, { title: string; imgEnvKey: string | undefined; challenge: string }> = {
  "ota-architecture": {
    title: "OTA System Architecture",
    imgEnvKey: process.env.NEXT_PUBLIC_OTA_MEMORY_MAP_IMAGE,
    challenge: `Cortex-M0의 하드웨어적 VTOR 미지원 문제를 해결하기 위해, 시스템 초기화 단계에서 벡터 테이블을 RAM 최하단 주소(0x20000000)로 복사하고 재매핑(Remapping)하는 시퀀스를 구현하였습니다.`
  },
  "vendor-independent": {
    title: "Vendor-Independent Firmware Architecture",
    imgEnvKey: process.env.NEXT_PUBLIC_VENDOR_HAL_IMAGE,
    challenge: `특정 MCU 제조사(Vendor)의 드라이버 라이브러리에 종속되지 않도록 독자적인 하드웨어 추상화 계층(HAL)을 설계하였습니다. 이를 통해 칩 수급 대란 등 공급망 리스크 발생 시 다른 제조사의 MCU로 최소한의 공수만 들여 펌웨어를 이식할 수 있는 포터블(Portable) 구조를 확보했습니다.`
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const currentProject = PROJECT_DATA[slug];

  if (!currentProject) {
    return (
      <main className="min-h-screen bg-zinc-950 text-center py-20 text-zinc-400 font-mono">
        [희망 퇴직 이후 정리 예정(6/30 ~)]
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 max-w-4xl mx-auto py-20 px-6 text-zinc-300">
      
      <h1 className="text-3xl font-bold text-white mb-8 font-mono border-b border-zinc-800 pb-4">
        [{currentProject.title}]
      </h1>
      
      <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">System Blueprint / Memory Map</h2>
      <section className="mb-12 bg-zinc-900/40 p-6 rounded-lg border border-zinc-800">
        {currentProject.imgEnvKey ? (
          <img 
            src={currentProject.imgEnvKey} 
            alt={`${currentProject.title} Diagram`} 
            className="w-full rounded" 
          />
        ) : (
          <div className="w-full h-64 bg-zinc-900 flex items-center justify-center text-zinc-500 font-mono text-sm rounded border border-dashed border-zinc-700">
            [희망 퇴직 이후 정리 예정(6/30 ~)]
          </div>
        )}
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-green-400 font-mono">Technical Challenges</h2>
        <p className="leading-relaxed whitespace-pre-wrap">
          {currentProject.challenge}
        </p>
      </section>
    </main>
  );
}