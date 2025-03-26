// import Image from "next/image";
// import Client1 from "@/assets/Client1.png";

// export default function TestimonialSection() {
//   return (
//     <section className="w-full h-auto py-28 relative z-20">
//       <div className="text-center mb-10 z-30">
//         <h2 className="text-3xl font-bold text-[#212121]">What Our Clients Say</h2>
//         <p className="text-gray-500 mt-2">Neque, Pulvinar Vestibulum Non Aliquam.</p>
//       </div>


//       <div className="h-auto py-10 flex flex-col md:flex-row items-center  justify-center gap-10 w-3/5 mx-auto">
//         <div className="w-1/2 z-20">
//           <Image
//             src={Client1}
//             alt="Client"
//             objectFit="cover"
//             className="2/5 z-20 rounded-lg shadow-md"
//           />
//         </div>


//         <div className="z-30 max-w-md w-1/2 text-center md:text-left">
//           <p className="text-black text-3xl font-bold">
//             ❝The Team At DevTech Fusion excels in both website
//             management and digital marketing. Their reliable development
//             services and impactful marketing strategies have greatly benefited.❞
//           </p>
//           <span className="mt-4 block font-semibold text-gray-900">
//             Jahanzaib Tabassum -{" "}
//             <a href="#" className="text-blue-500 hover:underline">Technado.ai</a>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Client1 from "@/assets/Client1.png";

export default function TestimonialSection() {
  return (
    <section className="w-full h-auto py-28 relative z-20">
      <div className="text-center mb-10 z-30">
        <h2 className="text-3xl md:text-3xl 2xl:text-4xl font-bold text-[#212121]">What Our Clients Say</h2>
        <p className="text-gray-500 mt-2">Neque, Pulvinar Vestibulum Non Aliquam.</p>
      </div>

      <div className="h-auto py-10 flex flex-col lg:flex-row items-center justify-center gap-10 md:w-5/6 w-2/3 lg:w-4/5 xl:w-5xl 2xl:w-2/3 mx-auto">

        <div className="w-full md:w-3/4 lg:w-1/2 z-20 flex justify-center">
          <Image
            src={Client1}
            alt="Client"
            layout="intrinsic"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="z-30 w-full md:w-3/4 lg:w-1/2 xl:w-2/3 text-center md:text-left">
          <blockquote className="text-black text-center lg:text-left md:text-xl xl:text-3xl/snug font-semibold leading-relaxed">
            ❝The Team At DevTech Fusion excels in both website
            management and digital marketing. Their reliable development
            services and impactful marketing strategies have greatly benefited.❞
          </blockquote>
          <span className="mt-4 text-center lg:text-left block font-semibold text-gray-900">
            Jahanzaib Tabassum - <a href="#" className="text-blue-500 hover:underline">Technado.ai</a>
          </span>
        </div>
      </div>
    </section>
  );
}
