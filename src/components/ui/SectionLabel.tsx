interface SectionLabelProps {
  index: string
  label: string
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="font-display text-3xl text-text md:text-4xl flex items-center gap-4">
        <span className="font-mono text-2xl text-accent md:text-3xl">{index}</span>
        <span className="h-px w-10 bg-border-strong" aria-hidden="true" />
        <span>{label}</span>
      </h2>
    </div>
  )
}