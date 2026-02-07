import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Facilities from "@/components/Facilities";
import Coaches from "@/components/Coaches";
import News from "@/components/News";
import Events from "@/components/Events";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Facilities />
      <Coaches />
      <News />
      <Events />
      <Booking />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
