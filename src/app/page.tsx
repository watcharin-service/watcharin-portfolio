import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import Footer from "@/components/Footer";
import { projects, experiences, profile } from "@/lib/data";

export default function Page() {
  return (
    <>
      <main>
        <section className="max-w-5xl mx-auto px-4 py-20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {profile.name} — {profile.role}
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl">
            {profile.summary}
          </p>
          <div className="mt-6 flex gap-3 text-sm">
            <a className="px-4 py-2 rounded-xl border" href={profile.links.github}>GitHub</a>
            <a className="px-4 py-2 rounded-xl border" href="#projects">ดูโปรเจกต์</a>
            <a className="px-4 py-2 rounded-xl border" href="#contact">ติดต่อ</a>
          </div>
        </section>

        <Section id="projects" title="โปรเจกต์">
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="ประสบการณ์">
          <div className="space-y-4">
            {experiences.map((e, i) => (
              <ExperienceItem key={i} {...e} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="ติดต่อ">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
            <p className="opacity-80">ส่งอีเมลมาที่ <a className="underline" href={profile.links.email}>watcharin@watcharin-service.com</a></p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}