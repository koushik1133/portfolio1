import React from "react";
import Projects from "../../components/sections/Projects";
import PageLayout from "../../components/ui/PageLayout";

export default function ProjectsPage() {
  return (
    <PageLayout 
      title="Featured Projects" 
      subtitle="A showcase of full-stack applications, AI platforms, and technical architecture."
    >
      <Projects />
    </PageLayout>
  );
}
