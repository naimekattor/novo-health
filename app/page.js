import Blog from "@/components/Blog";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowWorks />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Blog />
      <Mission />
      <Contacts />
      <Footer />
    </div>
  );
}
