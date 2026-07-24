import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { appProjects } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Android App Portfolio",
  description:
    "A beautiful portfolio homepage for open-source Android apps.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="glass-nav" aria-label="Primary navigation">
        <Link className="brand-mark" href="/">
          <span className="brand-symbol">
            <img src="/thingsenz-logo.png" alt="" />
          </span>
          <span>
            <strong>ThingSenz</strong>
            <small>Android Apps</small>
          </span>
        </Link>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#policies">Policies</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Open source. Play Store ready.
          </p>
          <h1>Simple Android apps, presented with serious care.</h1>
          <p className="hero-lede">
            A portfolio for small but complete apps: each project gets a clean
            writeup, source links, screenshots, and a direct privacy policy URL
            for Play Store listings.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <Smartphone size={18} aria-hidden="true" />
              View apps
            </a>
          </div>
        </div>

        <div className="hero-device" aria-label="Featured app preview">
          <div className="device-frame">
            <div className="device-top" />
            <div className="app-screen hero-screen">
              <div className="screen-header">
                <span>ThingSenz</span>
                <span>Android</span>
              </div>
              <div className="pulse-panel">
                <span>Open source</span>
                <strong>Small apps, done properly.</strong>
              </div>
              <div className="screen-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="screen-list">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="floating-note">
            <ShieldCheck size={18} aria-hidden="true" />
            Privacy policy included with every app
          </div>
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <p className="eyebrow">
            <Layers size={16} aria-hidden="true" />
            Featured projects
          </p>
        </div>
        <div className="project-grid">
          {appProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div
                className="mini-device"
                style={{ "--accent": project.accent } as CSSProperties}
                aria-hidden="true"
              >
                <div />
                <span />
                <span />
              </div>
              <div className="card-content">
                <div className="card-kicker">
                  <span>{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <Link href={`/apps/${project.slug}`}>
                    Details
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                  <Link href={`/apps/${project.slug}/privacy`}>
                    Privacy
                    <ShieldCheck size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div>
          <p className="eyebrow">
            <BookOpen size={16} aria-hidden="true" />
            About
          </p>
        </div>
        <p>
          Every app here is built solo, kept small on purpose, and shipped
          end to end — from the first line of Kotlin to a working Play Store
          listing with its own privacy policy.
        </p>
      </section>

      <section className="section-block compact" id="policies">
        <div className="section-heading">
          <p className="eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            Privacy policy links
          </p>
        </div>
        <div className="policy-list">
          {appProjects.map((project) => (
            <Link key={project.slug} href={`/apps/${project.slug}/privacy`}>
              <span>{project.name}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
