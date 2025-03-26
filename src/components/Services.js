// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import solutions from "./Solutions";


// export default function TechnologySolutions() {
//   return (
//     <section className="py-16 text-center">
//       {/* Section Heading */}
//       <h2 className="text-5xl md:text-4xl font-bold text-gray-900">
//         Technology Solutions That Deliver
//       </h2>
//       <p className="text-gray-500 mt-2 mb-10">
//         Neque, Pulvinar Vestibulum Non Aliquam.
//       </p>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//         {solutions.map((solution, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start text-left transition-transform transform hover:scale-105"
//           >
//             {/* Icon */}
//             <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
//               <FaArrowUpRightFromSquare className="text-gray-600 text-lg" />
//             </div>
//             {/* Title */}
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               {solution.title}
//             </h3>
//             {/* Description */}
//             <p className="text-gray-500">{solution.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import solutions from "./Solutions";

export default function TechnologySolutions() {
  return (
    <section className="w-full flex flex-col gap-10 py-16 px-4 sm:px-6 lg:px-8 2xl:py-40 text-center">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
        Technology Solutions That Deliver
      </h2>
      <p className="text-gray-500 2xl:text-xl">
        Neque, Pulvinar Vestibulum Non Aliquam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl  p-6 2xl:py-10 2xl:px-14 flex flex-col items-start text-left transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <FaArrowUpRightFromSquare className="text-gray-600 text-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 2xl:text-2xl mb-2">
              {solution.title}
            </h3>
            <p className="text-gray-500 2xl:text-xl">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

