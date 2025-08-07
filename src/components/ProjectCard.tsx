export default function ProjectCard({ title, description, tags, href }: { title: string; description: string; tags: string[]; href?: string }) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-md transition">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm opacity-80">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">{t}</span>
          ))}
        </div>
      </a>
    );
  }