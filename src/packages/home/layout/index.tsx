import Navbar from "@common/components/Navbar/Navbar";

import ExpandingRectangle from "@common/components/ExpandingRectangle";
import MobileNavSlider from "@common/components/Navbar/MobileNavSlider";
import NavProvider from "@common/contexts/NavContext";

import AboutSection from "../components/about/About";
import ContactSection from "../components/contact/Contact";
import HeroSection from "../components/hero/Hero";
import ProjectSection from "../components/project/Project";
import CareerSection from "../components/career/Career";

function HomeLayout() {
  return (
    <NavProvider>
      <Navbar />
      <main className="relative overflow-hidden">
        <ExpandingRectangle
          transformOrigin="100% 50%"
          rotation={-55}
          offset={{ top: -160, right: 0 }}
        />
        <ExpandingRectangle
          transformOrigin="100% 50%"
          rotation={55}
          offset={{ bottom: 0, right: "-7rem" }}
        />
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <MobileNavSlider />
    </NavProvider>
  );
}

export default HomeLayout;
