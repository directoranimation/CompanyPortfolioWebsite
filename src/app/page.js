// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Subscription from "@/components/Subscription";
// import TechnologySolutions from "@/components/Services";
// import ProjectShowcasing from "@/components/ProjectShowcasing";
// import HowWeWork from "@/components/HowWeWork";
// import MilestoneSection from "@/components/MilestoneSection";
// import TestimonialSection from "@/components/ClientTestimonials";
// import OurLocations from "@/components/OurLocation";
// import ContactUs from "@/components/ContactUsSection";

// import heroBackground from "@/assets/heroBackground.png";
// import EllipseBackground from "@/assets/EllipseBg.png";
// import EllipseTilt from "@/assets/EllipseTilt.png";
// import EllipseContact from "@/assets/EllipseContact.png";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="overflow-hidden">
//       <div className=" w-full h-screen">
//         <Image
//           className="absolute object-cover opacity-40 bottom-0 select-none -z-10 w-full h-[100%] "
//           src={heroBackground}
//           alt="heroBackground"
//         />
//         <Navbar />
//         <Hero />
//       </div>

//       <div className="relative Ellipse-bg w-full h-auto">
//         <Image
//           className="absolute top-0 right-0 left-0 bottom-0 -z-10  select-none w-full h-[100%] "
//           src={EllipseBackground}
//           alt="EllipseBackground"
//         />
//         <Subscription />
//         <TechnologySolutions />
//         <ProjectShowcasing />
//       </div>
//       <HowWeWork />
//       <div className="relative w-full h-auto">
//         <Image
//           src={EllipseTilt}
//           alt="EllipseTilt"
//           className="absolute object-cover select-none w-full h-full -z-10"
//         />
//         <MilestoneSection />
//         <TestimonialSection />
//         <div className="absolute left-[20%] top-[40%] z-40 w-3/5 p-8 h-10 rounded-4xl bg-white flex items-center justify-between">
//           <span>
//             “Statistics show that
//             <span className="text-red-500"> 95%</span>
//             of new products introduced each year end up failing”
//           </span>
//           <span>With Us It Won’t Happen!</span>
//         </div>
//       </div>
//       <div className="relative w-full h-auto ">
//         <Image
//             src={EllipseContact}
//             alt="EllipseContact"
//             className="absolute object-cover select-none w-full h-full -z-10"
//           />
//         <OurLocations/>
//         <ContactUs/>
//       </div>
//       <Footer />
//     </div>
//   );
// }
"use client";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Subscription from "@/components/Subscription";
import TechnologySolutions from "@/components/Services";
import ProjectShowcasing from "@/components/ProjectShowcasing";
import HowWeWork from "@/components/HowWeWork";
import MilestoneSection from "@/components/MilestoneSection";
import TestimonialSection from "@/components/ClientTestimonials";
import OurLocations from "@/components/OurLocation";
import ContactUs from "@/components/ContactUsSection";
import GradientBackground from "@/components/GradientBackground";

import heroBackground from "@/assets/heroBackground.png";
import EllipseBackground from "@/assets/EllipseBg.png";
import EllipseTilt from "@/assets/EllipseTilt.png";
import EllipseContact from "@/assets/EllipseContact.png";

import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full h-screen">
        <div className="animated-background absolute inset-0 bg-black opacity-40 -z-10">
         </div>
        {/* <Image
          className="absolute inset-0 object-cover opacity-40 -z-10 w-full h-full select-none"
          src={heroBackground}
          alt="Hero Background"
          priority
        /> */}
        <Navbar />
        <Hero />
      </div>

      <div className="relative w-full h-auto">
        <Image
          className="absolute inset-0 object-cover -z-10 select-none w-full h-full"
          src={EllipseBackground}
          alt="Ellipse Background"
        />
        <Subscription />
        <TechnologySolutions />
        <ProjectShowcasing />
      </div>

      <HowWeWork />

      <div className="relative w-full h-auto">
        <Image
          src={EllipseTilt}
          alt="Ellipse Tilt"
          className="absolute inset-0 object-cover select-none w-full h-full -z-10"
        />
        <MilestoneSection />
        <TestimonialSection />
        <div className="absolute left-[10%] p-4 sm:p-5 sm:left-[20%] md:left-[9%] lg:left-[10%] xl:left-[15%] 2xl:left-[18%] md:top-[50%] top-[43%] z-40 w-2/3 sm:w-3/5 md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 bg-white rounded-4xl shadow-lg flex flex-col gap-1 lg:flex-row items-center justify-between">
          <span className="text-center sm:text-left">
            “Statistics show that
            <span className="text-red-500"> 95%</span>
            of new products introduced each year end up failing”
          </span>
          <span className="mt-4 text-blue-500 sm:mt-0">With Us It Won’t Happen!</span>
        </div>
      </div>

      <div className="relative w-full h-auto">
        <Image
          src={EllipseContact}
          alt="Ellipse Contact"
          className="absolute inset-0 object-cover select-none w-full h-full -z-10"
        />
        <OurLocations />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
