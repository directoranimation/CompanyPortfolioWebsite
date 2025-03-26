// import Image from "next/image";
// import RingRight from "@/assets/RingRight.png";
// import RingLeft from "@/assets/RingLeft.png";
// import Dots from "@/assets/Dots.png";
// import Circles from "@/assets/Circles.png";
// import ArrowLeft from "@/assets/ArrowLeft.png";
// import ArrowRight from "@/assets/ArrowRight.png";
// import Mountain from "@/assets/Mountain.png";
// import Ellipse5 from "@/assets/Ellipse-5.png";
// import Logos from "./Logos";
// import LogoSlider from "./LogosSliderBar";
// // import GradientBackground from "@/components/GradientBackground";

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden gap-10">
//       <Image
//         className="absolute z-10 top-5 right-[-100px] w-[7vh] md:w-[8vh] lg:w-[9vh] xl:w-[15vh]"
//         src={RingRight}
//         alt="RingRight"
//         width={170}
//       />
//       <Image
//         className="absolute top-80 z-50 left-[-100px] w-[7vh] md:w-[8vh] lg:w-[9vh] xl:w-[15vh]"
//         src={RingLeft}
//         alt="RingLeft"
//         width={170}
//       />
//       <div className="relative z-10 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] gap-16  flex flex-col items-center justify-center">
//         <Image
//           className="absolute top-[-10px] -z-10 right-10"
//           src={Dots}
//           alt="Dots"
//           height={100}
//           width={100}
//         />
//         <Image
//           className="absolute top-[20px] left-15 -z-10"
//           src={Circles}
//           alt="Circles"
//           width={40}
//         />
//         <h1 className="text-white text-[2.5vh] sm:text-[5vh] md:text-[5vh] lg:text-[5vh] xl:text-[6vh] 2xl:text-[7vh] font-black font-['SatoshiVariable'] text-center">
//           Transforming Ideas Into <br />
//           <span className="text-[#211951]"> Cutting-Edge Solutions </span>
//         </h1>
//         <div className="absolute left-[24vw] top-[20vh] w-1/2 z-10 flex items-center justify-center gap-3">
//           <Image
//             className="w-[7vh]"
//             src={ArrowLeft}
//             alt="RingLeft"
//           />
//           <h3 className={`text-center text-[#211951] text-[3vh] font-bold font-['Caveat']`}>Fusion Style</h3>
//           <Image
//             className="w-[7vh]"
//             src={ArrowRight}
//             alt="RingLeft"
//           />
//         </div>
//         <p className="text-center">
//           Let's transform your vision into a world-class product. Our bespoke
//           applications are tailored to your business needs, ensuring you achieve
//           the visibility and growth you deserve.
//         </p>
//         <button className="mt-4 bg-[#211951] text-white px-6 py-3 rounded-lg">
//           Book Free Assessment
//         </button>
//       </div>
//       <div className="flex z-0 flex-wrap justify-center items-center w-full gap-2 h-20">
//         <LogoSlider />
//       </div>
//       <Image
//         className="absolute -z-10 bottom-0 select-none w-full h-[80%] "
//         src={Mountain}
//         alt="Mountain"
//       />
//       <Image
//         className="absolute -z-10 bottom-0 select-none w-1/2 h-[100%]"
//         src={Ellipse5}
//         alt="Ellipse5"
//       />
//     </div>
//   );
// };

// export default Hero;


import Image from "next/image";
import RingRight from "@/assets/RingRight.png";
import RingLeft from "@/assets/RingLeft.png";
import Dots from "@/assets/Dots.png";
import Circles from "@/assets/Circles.png";
import ArrowLeft from "@/assets/ArrowLeft.png";
import ArrowRight from "@/assets/ArrowRight.png";
import Mountain from "@/assets/Mountain.png";
import Ellipse5 from "@/assets/Ellipse-5.png";
import LogoSlider from "./LogosSliderBar";

const Hero = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden gap-10 px-6">
      <Image className="absolute top-5 right-[-100px] w-14 md:w-16 lg:w-20 xl:w-24" src={RingRight} alt="RingRight" />
      <Image className="absolute top-80 left-[-100px] w-14 md:w-16 lg:w-20 xl:w-24" src={RingLeft} alt="RingLeft" />
      
      <div className="w-[95%] relative h-auto z-10 md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-3/5 flex flex-col items-center gap-12">
        <Image className="absolute top-[-10px] right-10 -z-10" src={Dots} alt="Dots" width={100} height={100} />
        <Image className="absolute top-[20px] left-10 -z-10" src={Circles} alt="Circles" width={40} height={40} />
        <h1 className="text-white mt-10 md:mt-0 text-center text-3xl md:text-[44px] lg:text-5xl 2xl:text-6xl font-black font-['SatoshiVariable']">  
          <span className="inline md:block">Transforming Ideas Into </span>
          <span className="text-[#211951]">Cutting-Edge Solutions</span>
        </h1>
        
        <div className="absolute w-2/3 left-[18%] top-[38%] md:top-[28%] md:left-1/2 lg:top-1/3 lg:left-[46%] xl:left-[41%] 2xl:left-[43%] md:w-1/2 z-10 flex items-center justify-center gap-2 md:gap-3">
           <Image
            className="w-6 md:w-10 lg:w-11 xl:w-12 2xl:w-14"
            src={ArrowLeft}
            alt="RingLeft"
          />
          <span className={`Caveat text-center text-[#211951] text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold font-['Caveat']`}>Fusion Style</span>
          <Image
            className="w-6 md:w-10 lg:w-11 xl:w-12 2xl:w-14"
            src={ArrowRight}
            alt="RingLeft"
          />
        </div>
        
        <p className="text-base xl:text-base 2xl:text-xl mt-2 2xl:mt-10 text-black text-center">
          Let's transform your vision into a world-class product. Our bespoke applications are tailored to your business needs, ensuring you achieve the visibility and growth you deserve.
        </p>
        
        <button className="mt-4 bg-[#211951] text-white  text-sm md:text-xl px-3 py-2 md:px-3 md:py-2 xl:p-3 rounded-lg transition-transform cursor-pointer transform hover:scale-105">
          Book Free Assessment
        </button>
      </div>
      
      <LogoSlider />
      
      <Image className="absolute bottom-0 w-full h-[80%] -z-10" src={Mountain} alt="Mountain" />
      {/* <Image className="absolute bottom-0 w-1/2 h-full -z-10" src={Ellipse5} alt="Ellipse5" /> */}
    </div>
  );
};

export default Hero;

