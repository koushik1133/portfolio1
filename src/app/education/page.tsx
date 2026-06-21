import React from "react";
import Education from "../../components/sections/Education";
import PageLayout from "../../components/ui/PageLayout";

export default function EducationPage() {
  return (
    <PageLayout 
      title="Education" 
      subtitle="My academic foundation at Iowa State University."
    >
      <Education />
    </PageLayout>
  );
}
