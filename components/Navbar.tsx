'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // 💡 [플래시 플래그] 모바일 메뉴 열림/닫힘 상태 제어 (Default: 닫힘)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 영역 (모바일에서도 가독성을 위해 hidden 제거 및 미세조정) */}
        <div className="text-green-400 font-mono font-bold text-base sm:text-xl">
          FirmWare Engineer
        </div>
        
        {/* 💻 데스크톱 메뉴 영역 (md:flex로 PC에서만 노출, 모바일에서는 숨김) */}
        <div className="hidden md:flex gap-6 font-mono text-sm text-zinc-400">
          <Link href="/#about" className="hover:text-green-400">01. About</Link>
          <Link href="/#experience" className="hover:text-green-400">02. Experience</Link>
          <Link href="/#projects" className="hover:text-green-400">03. Projects</Link>
          <Link href="/#contact" className="hover:text-green-400">04. Contact</Link>
        </div>

        {/* 📱 모바일 토글 버튼 (PC에서는 hidden으로 숨김, 모바일에서만 block) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="block md:hidden text-zinc-400 hover:text-green-400 focus:outline-none p-1 transition-colors cursor-pointer"
        >
          {/* 토글 상태에 따라 아이콘 변경 (X 또는 ☰) */}
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* 📱 모바일 전용 드롭다운 메뉴 레지스터 */}
      {/* isOpen 플래그가 참(true)일 때만 하단으로 메뉴바를 펼칩니다. */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 border-b border-zinc-800 bg-black/95' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-4 font-mono text-sm text-zinc-400 px-6 py-4">
          <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-green-400 py-1">01. About</Link>
          <Link href="/#experience" onClick={() => setIsOpen(false)} className="hover:text-green-400 py-1">02. Experience</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-green-400 py-1">03. Projects</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-green-400 py-1">04. Contact</Link>
        </div>
      </div>
    </nav>
  );
}