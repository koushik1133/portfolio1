import React from "react";
import Hero from "../components/sections/Hero";
import HighlightsBanner from "../components/sections/HighlightsBanner";
import QuickAbout from "../components/sections/QuickAbout";
import RecentExperience from "../components/sections/RecentExperience";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import SeniorProject from "../components/sections/SeniorProject";
import NexusShowcase from "../components/sections/NexusShowcase";
import CallToAction from "../components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <main className="page-container">
        <Hero />
        <HighlightsBanner />
        <QuickAbout />
        <RecentExperience />
        <FeaturedProjects />
        <SeniorProject />
        <NexusShowcase />
        <CallToAction />
      </main>
    </>
  );
}
