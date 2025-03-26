// import values from "./Values";
// import heroBackground from "@/assets/heroBackground.png";
// import Grains from "@/assets/Grains.png";
// import Blob from "@/assets/Blob.png";

// import Image from "next/image";


// export default function HowWeWork() {
//   return (
//     <section className="relative py-16 text-center">
//       <Image src={heroBackground} alt={"Background"} className="absolute bottom-0 top-0 object-cover opacity-50 -z-50 w-full h-full" />
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//         How we work at DTF
//       </h2>
//       <p className="text-gray-500 mt-2 mb-10">
//         Our shared values keep us connected and guide us as one team.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-5xl mx-auto">
//         {values.map((value, index) => (
//             <div
//             key={index}
//             className="flex flex-col items-center text-center space-y-3"
//             >
//             <Image src={value.icon} alt={value.title} className="w-12 h-12" />
//             <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
//             <p className="text-gray-500">{value.description}</p>
//           </div>
//         ))}
//       </div>
//     <Image src={Grains} alt={"Grains"} className="absolute bottom-0 top-0 object-cover -z-40 w-full h-full" />
//     <Image src={Blob} alt={"Blob"} className="absolute bottom-0 top-0 object-cover -z-30 w-full h-full" />
//     </section>
//   );
// }




import values from "./Values";
import heroBackground from "@/assets/heroBackground.png";
import Grains from "@/assets/Grains.png";
import Blob from "@/assets/Blob.png";
import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="w-full relative py-16 text-center overflow-hidden">
      <Image 
        src={heroBackground} 
        alt="Background" 
        className="absolute inset-0 object-cover opacity-50 -z-50 w-full h-full"
      />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
          How we work at DTF
        </h2>
        <p className="text-gray-500 mt-2 mb-10">
          Our shared values keep us connected and guide us as one team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-8 w-[90%] md:w-4/5 lg:w-3/4 xl:w-5xl 2xl:w-2/3 mx-auto relative z-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3 p-5 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
          >
            <Image src={value.icon} alt={value.title} className="w-12 h-12" />
            <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
            <p className="text-gray-500">{value.description}</p>
          </div>
        ))}
      </div>
      
      <Image 
        src={Grains} 
        alt="Grains" 
        className="absolute inset-0 object-cover -z-40 w-full h-full opacity-40"
      />
      <Image 
        src={Blob} 
        alt="Blob" 
        className="absolute inset-0 object-cover -z-30 w-full h-full opacity-40"
      />
    </section>
  );
}
