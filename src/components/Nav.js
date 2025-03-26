// // export default Nav;

// import Link from "next/link";

// const Nav = ({ mobileClose }) => {
//   return (
//     <nav className="flex flex-col md:flex-row items-center bg-white p-4 md:p-1.5 md:space-x-6 rounded-2xl shadow-md md:relative z-50">
//       <div className="flex flex-col text-left md:items-center md:justify-center md:flex-row px-4 md:space-x-10 md:text-center">
//         {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
//           <Link
//             key={item}
//             href={`/${item.toLowerCase()}`}
//             className="text-gray-600 hover:text-blue-600 py-2 md:py-0"
//             onClick={mobileClose}
//           >
//             {item}
//           </Link>
//         ))}
//       </div>

//       <button
//         type="button"
//         className="cursor-pointer bg-[#211951] py-2 px-10 rounded-lg text-white mt-4 md:mt-0"
//       >
//         Lets Talk
//       </button>
//     </nav>
//   );
// };

// export default Nav;

import Link from 'next/link';

const Nav = ({ mobileClose }) => {
  return (
    <nav className="flex flex-col md:flex-row items-center bg-white md:p-1 lg:space-x-4 xl:space-x-6 rounded-lg shadow-md md:relative z-50">
      <div className="flex flex-col md:px-5 md:text-xs md:text-[13px] xl:text-sm xl:px-3 md:flex-row items-center sm:space-x-3 lg:space-x-5 xl:space-x-10">
        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-gray-600 hover:text-blue-600 py-2 md:py-0 transition-colors"
            onClick={mobileClose}
          >
            {item}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="cursor-pointer bg-[#211951] sm:py-1 sm:px-4 lg:py-2 lg:px-6 rounded-lg md:text-[13px] xl:text-sm 2xl:text-base text-white mt-4 md:mt-0 transition-transform transform hover:scale-105"
      >
        Lets Talk
      </button>
    </nav>
  );
};

export default  Nav;



