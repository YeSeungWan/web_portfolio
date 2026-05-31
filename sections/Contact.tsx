// sections/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 font-sans">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-mono text-2xl font-bold text-green-400 mb-4">[04. Get In Touch]</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          새로운 프로젝트 협업, 기술 교류, 또는 임베디드 및 풀스택 개발에 관한 어떤 이야기든 환영합니다. 
          아래의 채널을 통해 연락해 주시면 빠르게 답변해 드리겠습니다.
        </p>

        {/* 심플한 이메일 링크 버튼 */}
        <div className="inline-block border border-green-500/30 bg-green-950/10 rounded-lg p-6 w-full font-mono text-left sm:text-center">
          <p className="text-xs text-green-500 mb-1">// Contact Information</p>
          <p className="text-white text-lg font-bold mb-4">your-email@gmail.com</p>
          
          <a 
            href="mailto:your-email@gmail.com"
            className="inline-block text-xs font-bold text-zinc-950 bg-green-400 hover:bg-green-300 px-4 py-2 rounded transition-colors"
          >
            Say Hello (Send Email)
          </a>
        </div>

        {/* 하단 저작권 표시 */}
        <footer className="mt-20 font-mono text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Firmware Portfolio. Powered by Next.js & Synology NAS.
        </footer>
      </div>
    </section>
  );
}