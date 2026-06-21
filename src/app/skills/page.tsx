import React from "react";
import Skills from "../../components/sections/Skills";
import PageLayout from "../../components/ui/PageLayout";

export default function SkillsPage() {
  return (
    <PageLayout 
      title="Technical Skills" 
      subtitle="Technologies, frameworks, and tools I use to build robust software."
    >
      <Skills />
    </PageLayout>
  );
}
