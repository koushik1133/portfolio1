import React from "react";
import About from "../../components/sections/About";
import PageLayout from "../../components/ui/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout 
      title="About Me" 
      subtitle="My journey in engineering, automation, and full-stack development."
    >
      <About />
    </PageLayout>
  );
}
