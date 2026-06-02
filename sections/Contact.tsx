'use client'; // 버튼 클릭 이벤트를 처리하기 위해 추가

import { useState } from 'react';

export default function Contact() {
  const email = "tmddhks68@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    // 1. 기본 mailto 동작은 그대로 수행 시도
    // (메일 앱이 설정된 사용자는 앱이 켜짐)
    
    // 2. 동시에 클립보드에 이메일 주소 복사 (방어 코드)
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 메시지 초기화
    });
  };

  return (
    <section id="contact" className="py-20 font-sans max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-2xl font-bold text-green-400 mb-12">
        [04. Get In Touch]
      </h2>

      <div className="w-full max-w-3xl mx-auto space-y-8">
        <p className="text-zinc-400 text-sm leading-relaxed text-center sm:text-left">
          새로운 프로젝트 협업, 기술 교류, 또는 임베디드 및 풀스택 개발에 관한 어떤 이야기든 환영합니다. <br className="hidden sm:inline" />
          아래의 채널을 통해 연락해 주시면 빠르게 답변해 드리겠습니다.
        </p>

        <div className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-8 w-full font-mono text-center">
          <p className="text-xs text-green-500 mb-2">// Contact Information</p>
          <p className="text-white text-xl font-bold mb-6">{email}</p>
          
          <div className="relative inline-block">
            <a 
              href={`mailto:${email}`}
              onClick={handleCopyEmail}
              className="inline-block text-xs font-bold text-zinc-950 bg-green-400 hover:bg-green-300 px-6 py-3 rounded transition-colors select-none"
            >
              {copied ? "✓ Copied to Clipboard!" : "Say Hello (Send Email)"}
            </a>
          </div>
          
          <p className="text-zinc-500 text-[11px] mt-3">
            * 메일 프로그램이 열리지 않으면 주소가 이미 복사되었으니 붙여넣기(Ctrl+V) 하시면 됩니다.
          </p>
        </div>

        <footer className="pt-20 font-mono text-xs text-zinc-600 text-center w-full">
          &copy; {new Date().getFullYear()} Firmware Portfolio. Powered by Next.js & Synology NAS.
        </footer>
      </div>
    </section>
  );
}