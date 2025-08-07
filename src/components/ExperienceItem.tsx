export default function ExperienceItem({ role, company, period, points }: { role: string; company: string; period: string; points: string[] }) {
    return (
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{role} · {company}</h3>
          <span className="text-xs opacity-70">{period}</span>
        </div>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    );
  }