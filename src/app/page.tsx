import DotAnimation from "@/components/DotAnimation";
import DotCursor from "@/components/DotCursor";
import AboutMePage from "@/components/pages/AboutMePage";
import ContactPage from "@/components/pages/ContactPage";
import ExperiencePage from "@/components/pages/ExperiencePage";
import LandingPage from "@/components/pages/LandingPage";
import TechStack from "@/components/pages/TechStack";

const page = () => {
  return (
    <div className="">
      <DotCursor />

      {/* landing page */}
      <LandingPage />

      <hr className="border-gray-300 w-full" />

      <AboutMePage />
      <hr className="border-gray-300 w-full" />
      <ExperiencePage />
      <DotAnimation text={"Tech Stacks"} />
      <TechStack />
      <hr className="border-gray-300 w-full" />
      <ContactPage />
    </div>
  );
};

export default page;
