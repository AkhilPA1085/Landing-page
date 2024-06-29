import HomeBanner from "@/components/sections/Banner/HomeBanner";
import ContactUs from "@/components/sections/ContactUs";
import Destinations from "@/components/sections/Destinations";
import Packages from "@/components/sections/Packages";
import PackagesBanner from "@/components/sections/PackagesBanner";
import ServicesBar from "@/components/sections/ServicesBar";
import Testimonaials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/why-choose";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main className="relative z-20 bg-white">
        <ServicesBar />
        <Packages />
        <Destinations />
        <WhyChooseUs />
        <PackagesBanner />
        <Testimonaials />
        <ContactUs />
      </main>
    </>
  );
}
