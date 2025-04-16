import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

export default page;
