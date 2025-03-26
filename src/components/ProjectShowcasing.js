// import { FiArrowUpRight } from "react-icons/fi";
// import project from './Projects';

// export default function ProjectShowcasing() {
//   return (
//     <section className="py-16 text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//         Innovation & Results
//       </h2>
//       <p className="text-gray-500 mt-2 mb-10">
//         Neque, Pulvinar Vestibulum Non Aliquam.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
//         {project.map((caseStudy, index) => (
//           <div key={index} className="flex items-center justify-between space-x-6">
//             <div className="w-3/5 flex flex-col items-start text-left space-y-2">
//               <span className="text-sm text-black font-['SatoshiVariable']">{caseStudy.category}</span>
//               <h3 className="text-[40px] font-extrabold text-gray-900">{caseStudy.title}</h3>
//               <button className="bg-white shadow-md p-2 rounded-lg transition hover:bg-gray-200">
//                 <FiArrowUpRight className="text-gray-900 text-lg" />
//               </button>
//             </div>

//             <div className="w-[200px] h-[140px] bg-white border border-gray-300 rounded-md flex items-center justify-center">
//               {caseStudy.image ? (
//                 <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover rounded-md" />
//               ) : (
//                 <span className="text-gray-400">Image Placeholder</span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import { FiArrowUpRight } from "react-icons/fi";
import project from "./Projects";

export default function ProjectShowcasing() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
        Innovation & Results
      </h2>
      <p className="text-gray-500 mt-2 mb-10">
        Neque, Pulvinar Vestibulum Non Aliquam.
      </p>  

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 mx-auto">
        {project.map((caseStudy, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6 2xl:w-full bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
              <span className="md:text-xs lg:text-sm font-extralight text-black font-['SatoshiVariable']">{caseStudy.category}</span>
              <h3 className="text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-gray-900">{caseStudy.title}</h3>
              <button className="bg-white shadow-md p-2 rounded-lg transition hover:bg-gray-200">
                <FiArrowUpRight className="text-gray-900 text-lg" />
              </button>
            </div>

            <div className="w-[200px] h-[140px] bg-white border border-gray-300 rounded-md flex items-center justify-center overflow-hidden">
              {caseStudy.image ? (
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover rounded-md" />
              ) : (
                <span className="text-gray-400">Image Placeholder</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
