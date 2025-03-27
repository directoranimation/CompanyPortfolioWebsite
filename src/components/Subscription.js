import Image from "next/image";
import EllipseBackground from "@/assets/EllipseBg.png";

const Subscription = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative w-[90%] bg-white -mt-20 shadow-[0_4px_4px_#00000040] rounded-[15px] gap-2 md:gap-10 md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl flex flex-col lg:flex-row p-8 md:p-10 justify-between items-center">
        <div className="w-full lg:w-3/5 xl:w-2/5 space-y-4 text-center font-['SatoshiVariable'] md:text-left">
          <h2 className="text-2xl text-center font-bold leading-tight lg:text-left md:text-3xl 2xl:text-4xl ">
            <span className="lg:block text-black">Making Your </span>
            <span className="lg:block text-black">Business A </span>
            <span className="lg:block text-black">Legendary With</span>
            <span className="lg:block text-black">Technology</span>
          </h2>
          <p className="text-center lg:text-left text-gray-500 text-sm sm:text-base 2xl:text-xl">
            Fringilla Non Proin Nec In In Lorem Amet Eget Ac. Mauris.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-1 items-center overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 md:p-2 xl:p-3 border-1 border-[#9E9E9E] outline-none flex-1 rounded-[5px] w-full sm:w-auto"
            />
            <button className="bg-[#211951] text-white font-semibold text-base rounded-[5px] px-2 py-2 md:px-4 md:py-2 xl:px-6 xl:py-3 w-full sm:w-auto">
              SignUp
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center mt-6 md:mt-0">
          <div className="w-full h-full 2xl:h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src={EllipseBackground} // Replace with your actual image
              alt="Placeholder"
              width={150}
              height={350}
              className="absolute object-cover top-0 bottom-0 md:relative opacity-50 w-36 h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;

