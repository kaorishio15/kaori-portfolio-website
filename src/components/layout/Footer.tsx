export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0A192F]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between md:px-10">
        <p>&copy; {new Date().getFullYear()} Kaori Shioyama</p>
        <p className="font-mono text-xs text-slate-400">Built with React + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  )
}