// app/page.tsx
'use client';

import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {

  return (
    <section id="about">
      <main className="relative min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </section>
  );
}