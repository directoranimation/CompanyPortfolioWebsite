import { FiArrowUpRight } from "react-icons/fi";
import project from "./Projects";

export default function ProjectShowcasing() {
  return (
    <section className="font-['SatoshiVariable'] w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
        Innovation & Results
      </h2>
      <p className="text-gray-500 font-['Inter']  mt-2 mb-10">
        Neque, Pulvinar Vestibulum Non Aliquam.
      </p>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto">
        {project.map((caseStudy, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6 2xl:w-full p-6"
          >
            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
              <span className="md:text-xs lg:text-lg font-bold text-black ">{caseStudy.category}</span>
              <h3 className="text-2xl md:text-xl lg:text-2xl 2xl:text-[40px] font-extrabold text-gray-900">{caseStudy.title}</h3>
              <button className="bg-white p-3 transition hover:bg-gray-200">
                <FiArrowUpRight className="text-gray-900 text-lg" />
              </button>
            </div>

            <div className="w-[200px] h-[140px] bg-white border border-black flex items-center justify-center overflow-hidden">
              {caseStudy.image ? (
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
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
