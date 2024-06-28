import HomeBanner from "@/components/sections/Banner/HomeBanner";
import Destinations from "@/components/sections/Destinations/page";
import Packages from "@/components/sections/Packages";
import ServicesBar from "@/components/sections/ServicesBar";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main className="relative z-20 bg-white">
      <ServicesBar/>
      <Packages/>
      <Destinations/>
      </main>
    </>
  );
}
