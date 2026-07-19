import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { appProjects, getAppProject } from "@/lib/apps";

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
    title: `${project.name} Privacy Policy`,
    description: `Privacy policy for ${project.name}.`,
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getAppProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="site-shell policy-shell">
      <Link className="back-link" href={`/apps/${project.slug}`}>
        <ArrowLeft size={18} aria-hidden="true" />
        {project.name}
      </Link>

      <article className="policy-document">
        <p className="eyebrow">
          <ShieldCheck size={16} aria-hidden="true" />
          Privacy Policy
        </p>
        <h1>{project.name} Privacy Policy</h1>
        <p className="policy-date">Last updated: {project.privacy.lastUpdated}</p>

        <section>
          <h2>Overview</h2>
          <p>{project.privacy.overview}</p>
        </section>

        <section>
          <h2>Information Collected</h2>
          <ul>
            {project.privacy.dataCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>How Information Is Used</h2>
          <ul>
            {project.privacy.dataUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <ul>
            {project.privacy.thirdParties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.privacy.externalLibraries &&
          project.privacy.externalLibraries.length > 0 && (
            <section>
              <h2>External Libraries</h2>
              <ul>
                {project.privacy.externalLibraries.map((library) => (
                  <li key={library.name}>
                    <a href={library.url}>{library.name}</a>:{" "}
                    {library.description}
                  </li>
                ))}
              </ul>
            </section>
          )}

        <section>
          <h2>Data Retention And Deletion</h2>
          <p>{project.privacy.retention}</p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>{project.privacy.children}</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about this privacy policy, contact{" "}
            <a href={`mailto:${project.privacy.contactEmail}`}>
              {project.privacy.contactEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
