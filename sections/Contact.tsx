'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function Contact() {
  const email = "tmddhks68@gmail.com";
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 font-sans max-w-4xl mx-auto px-6 relative">
      <h2 className="font-mono text-2xl font-bold text-green-400 mb-8">
        [04. Contact Me]
      </h2>

      <div className="w-full max-w-3xl mx-auto space-y-8">
        <p className="text-zinc-400 leading-relaxed text-sm max-w-2xl">
          새로운 프로젝트 협업, 기술 교류, 또는 임베디드 및 풀스택 개발에 관한 어떤 이야기든 환영합니다.<br className="hidden sm:inline" />
          아래의 채널을 통해 연락해 주시면 빠르게 답변해 드리겠습니다.
        </p>

        <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-6 md:p-10 w-full font-mono text-center flex flex-col items-center space-y-4 md:space-y-5">
          
          {/* 상단 레이벨 */}
          <span className="text-xs text-green-400 font-mono tracking-widest uppercase block">
            Contact Information
          </span>

          {/* 이메일 주소 */}
          <a 
            href={`mailto:${email}`}
            className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-wider hover:text-green-400 transition-colors block break-all font-sans"
          >
            {email}
          </a>
          
          {/* 버튼 구역 */}
          <div className="relative inline-block w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={handleOpenContactModal}
              className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold rounded-lg text-xs md:text-sm transition-all shadow-md hover:shadow-green-500/20 active:scale-95 cursor-pointer font-sans"
            >
              {copied ? "✓ Box Opened & Copied!" : "Say Hello (Send Email)"}
            </button>
          </div>
          
          {/* 하단 안내 가이드 */}
          <p className="text-zinc-500 text-[11px] pt-3 border-t border-zinc-800/60 w-full max-w-md mx-auto leading-normal">
            * 버튼을 누르면 우측 하단에 간편 문의 창이 열리며, 주소도 자동 복사됩니다.
          </p>
        </div>

        <footer className="pt-16 md:pt-20 font-mono text-xs text-zinc-600 text-center w-full">
          &copy; {new Date().getFullYear()} Firmware Portfolio. Powered by Next.js & Synology NAS.
        </footer>
      </div>

      {/* 우측 하단 스탠바이 */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}