import type { Metadata } from "next";

import { ProjectsBrowser } from "@/components/main/projects-browser";
import { PageHeading } from "@/components/sub/page-heading";

export const metadata: Metadata = { title: "Projects | Surya Anish K" };

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <PageHeading
        badge="My Work"
        title="Projects"
        subtitle="Browse everything I've built, or filter by Python, MERN and Portfolios."
      />
      <ProjectsBrowser />
    </main>
  );
}
