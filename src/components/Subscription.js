// import Image from "next/image";

// const Subscription = () => {
//   return (
//     <section className="w-full flex justify-center py-10 px-5">
//       <div className="bg-white -mt-20 z-40 shadow-lg rounded-2xl gap-10 w-3/5 flex flex-col md:flex-row p-10 justify-between items-center">
//         <div className="md:w-2/5 space-y-4">
//           <h1 className="text-4xl font-bold leading-tight">
//             Making Your <br />
//             <span className="text-black">Business A</span> <br />
//             <span className="text-black">Legendary With</span> <br />
//             <span className="text-black">Technology</span>
//           </h1>
//           <p className="text-gray-500">
//             Fringilla Non Proin Nec In In Lorem Amet Eget Ac. Mauris.
//           </p>
//           {/* Signup Form */}
//           <div className="flex items-center border rounded-lg overflow-hidden">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="p-3 outline-none flex-1"
//             />
//             <button className="bg-[#211951] text-white px-6 py-3">
//               SignUp
//             </button>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="md:w-2/5 flex justify-center items-center mt-6 md:mt-0">
//           <div className="w-full h-48 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center">
//             <Image
//               src="/placeholder-image.png" // Replace with your actual image
//               alt="Placeholder"
//               width={150}
//               height={150}
//               className="opacity-50"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Subscription;

import Image from "next/image";

const Subscription = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] bg-white -mt-20 z-40 shadow-lg rounded-2xl gap-2 md:gap-10 md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 flex flex-col lg:flex-row p-8 md:p-10 justify-between items-center">
        <div className="w-full lg:w-3/5 xl:w-3/5 space-y-4 text-center md:text-left">
          <h2 className="text-2xl text-center lg:text-left md:text-3xl 2xl:text-4xl font-bold leading-tight">
            <span className="lg:block text-black">Making Your </span>
            <span className="lg:block text-black">Business A </span>
            <span className="lg:block text-black">Legendary With</span>
            <span className="lg:block text-black">Technology</span>
          </h2>
          <p className="text-center lg:text-left text-gray-500 text-sm sm:text-base 2xl:text-xl">
            Fringilla Non Proin Nec In In Lorem Amet Eget Ac. Mauris.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 md:p-2 xl:p-3 outline-none flex-1 w-full sm:w-auto"
            />
            <button className="bg-[#211951] text-white px-2 py-2 md:px-4 md:py-2 xl:px-6 xl:py-3 w-full sm:w-auto">
              SignUp
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center mt-6 md:mt-0">
          <div className="w-full h-full 2xl:h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder-image.png" // Replace with your actual image
              alt="Placeholder"
              width={150}
              height={350}
              className="opacity-50 w-36 h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;

