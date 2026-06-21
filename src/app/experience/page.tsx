import React from "react";
import Experience from "../../components/sections/Experience";
import PageLayout from "../../components/ui/PageLayout";

export default function ExperiencePage() {
  return (
    <PageLayout 
      title="Experience" 
      subtitle="My professional background building enterprise software and AI solutions."
    >
      <Experience />
    </PageLayout>
  );
}
