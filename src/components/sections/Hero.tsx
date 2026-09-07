import { Mail, ArrowRight, FileText } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-4 pt-20 pb-12 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Switch grid to 2 columns starting at sm: instead of lg: */}
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12 sm:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col items-start sm:col-span-7 md:col-span-6">
            <span className="font-sans text-xs font-medium text-secondary sm:text-sm">
              Hello, I&apos;m
            </span>

            {/* Responsive font size that scales down gracefully */}
            <h1 className="mt-2 font-display text-2xl font-normal leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
              Kaori Shioyama
            </h1>

            <p className="mt-2 font-sans text-base font-medium text-text-muted sm:text-xl">
              Computer Science Student @ Texas A&M
            </p>

            <p className="mt-4 max-w-xl font-sans text-xs leading-relaxed text-text-muted sm:text-sm md:text-base">
              Building practical software applications, digital forensics tools, and web platforms with React, TypeScript, and Python.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A192F] px-4 py-2 font-sans text-xs font-semibold !text-white transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
              >
                View Projects
                <ArrowRight className="h-3.5 w-3.5 !text-white sm:h-4 sm:w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 font-sans text-xs font-medium text-text transition-colors hover:bg-border/30 sm:px-6 sm:py-3 sm:text-sm"
              >
                <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                About Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-4 sm:mt-10 sm:gap-5 sm:pt-6">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-text-muted sm:text-xs">
                Connect:
              </span>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/kaorishio15"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-text-muted transition-colors hover:text-text"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/kaorishioyama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-text-muted transition-colors hover:text-text"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:kaori@example.com"
                  aria-label="Email"
                  className="text-text-muted transition-colors hover:text-text"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Headshot Frame scaled for split screen */}
          <div className="relative flex items-center justify-center sm:col-span-5 sm:justify-center md:col-span-6">
            {/* Image width dynamically scales with viewport width using vvw/percentage clamps */}
            <div className="relative aspect-square w-44 sm:w-64 md:w-80 lg:w-[26rem]">
              
              <div className="absolute -inset-2 rounded-full bg-secondary/10 blur-xl" />

              <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-background shadow-xl">
                <img
                  src="/images/kaori-sec-headshot.jpg"
                  alt="Kaori Shioyama"
                  className="h-full w-full object-cover object-[center_80%]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}