import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { appProjects, getAppProject } from "@/lib/apps";
import { getProjectScreenshots } from "@/lib/screenshots";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return appProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getAppProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getAppProject(slug);

  if (!project) {
    notFound();
  }

  const screenshots = await getProjectScreenshots(project.slug);

  return (
    <main className="site-shell detail-shell">
      <Link className="back-link" href="/">
        <ArrowLeft size={18} aria-hidden="true" />
        Home
      </Link>

      <section className="detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className="hero-actions">
            {project.links.playStore && (
              <a className="primary-action" href={project.links.playStore}>
                <ShoppingBag size={18} aria-hidden="true" />
                Play Store
              </a>
            )}
            {project.links.source && (
              <a className="secondary-action" href={project.links.source}>
                <Code2 size={18} aria-hidden="true" />
                Source
              </a>
            )}
            <Link className="secondary-action" href={`/apps/${project.slug}/privacy`}>
              <ShieldCheck size={18} aria-hidden="true" />
              Privacy
            </Link>
          </div>
        </div>
        <div
          className="detail-phone"
          style={{ "--accent": project.accent } as CSSProperties}
          aria-hidden="true"
        >
          <div className="device-frame">
            <div className="device-top" />
            <div className="app-screen">
              <div className="screen-header">
                <span>{project.name}</span>
                <span>{project.year}</span>
              </div>
              <div className="pulse-panel">
                <span>{project.status}</span>
                <strong>{project.tagline}</strong>
              </div>
              <div className="screen-list">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <div>
          <h2>Highlights</h2>
          <ul className="check-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Stack</h2>
          <div className="tag-row large">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          {project.license && <p className="license-note">{project.license}</p>}
        </div>
      </section>

      {screenshots.length > 0 && (
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Screenshots</p>
          </div>
          <div className="screenshot-row">
            {screenshots.map((screenshot) => (
              <figure className="screenshot-card image-card" key={screenshot.src}>
                <img src={screenshot.src} alt={screenshot.alt} />
                <figcaption>{screenshot.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="privacy-callout">
        <div>
          <p className="eyebrow">Play Store support</p>
          <h2>Read the privacy policy for {project.name}.</h2>
        </div>
        <Link href={`/apps/${project.slug}/privacy`}>
          View policy
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
