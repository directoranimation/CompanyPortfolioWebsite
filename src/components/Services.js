import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import solutions from "./Solutions";

export default function TechnologySolutions() {
  return (
    <section className="font-['SatoshiVariable'] w-full flex flex-col gap-10 py-16 px-4 sm:px-6 lg:px-8 2xl:py-40 z-50 text-center">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
        Technology Solutions That Deliver
      </h2>
      <p className="text-gray-500 font-['Inter'] 2xl:text-xl">
        Neque, Pulvinar Vestibulum Non Aliquam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-[10px] shadow-[0_4px_4px_#00000040]  p-6 2xl:p-6 flex flex-col items-start text-left transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <FaArrowUpRightFromSquare className="text-gray-600 text-lg" />
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 2xl:text-2xl mb-2">
              {solution.title}
            </h3>
            <p className="text-gray-500 2xl:text-lg">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

