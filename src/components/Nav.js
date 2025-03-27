import Link from 'next/link';

const Nav = ({ mobileClose }) => {
  return (
    <nav className="flex flex-col items-start p-10 md:flex-row md:items-center bg-white md:p-[6px] lg:space-x-4 xl:space-x-6 rounded-2xl shadow-[0_4px_4px_#00000040] md:relative z-50">
      <div className="flex flex-col md:px-5 md:text-xs md:text-[13px] xl:text-sm xl:px-3 md:flex-row items-center sm:space-x-3 lg:space-x-5 xl:space-x-10">
        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-gray-600 font-['SatoshiVariable'] hover:text-blue-600 py-2 md:py-0 transition-colors"
            onClick={mobileClose}
          >
            {item}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="cursor-pointer bg-[#211951] shadow-[0_4px_4px_#00000040]  py-1 px-4 lg:py-2 lg:px-6 rounded-[9px] md:text-[13px] xl:text-sm 2xl:text-base text-white mt-4 md:mt-0 transition-transform transform hover:scale-105"
      >
        Lets Talk
      </button>
    </nav>
  );
};

export default  Nav;



