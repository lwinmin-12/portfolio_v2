import AboutMePage from "@/components/pages/AboutMePage";
import ExperiencePage from "@/components/pages/ExperiencePage";
import LandingPage from "@/components/pages/LandingPage";

const page = () => {
  return (
    <div className="">
      {/* landing page */}
      <LandingPage />

      <div className="px-12 pb-1 text-one ">
        <p>ABOUT ME!</p>
      </div>
      <hr className="border-gray-300 w-full" />
      <AboutMePage />
      <hr className="border-gray-300 w-full" />
      <ExperiencePage />
    </div>
  );
};

export default page;
