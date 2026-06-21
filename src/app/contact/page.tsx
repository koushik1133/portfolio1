import React from "react";
import Contact from "../../components/sections/Contact";
import PageLayout from "../../components/ui/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout 
      title="Get In Touch" 
      subtitle="Let's discuss full-time roles, freelance opportunities, or technical consulting."
    >
      <Contact />
    </PageLayout>
  );
}
