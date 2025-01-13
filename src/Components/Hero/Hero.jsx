import React from "react";
import HeroPng from "../../assets/Strawbarreis.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[665px]">
            {/* Text Content Section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-3xl pl-6 md:pl-14"
              >
                01________
              </h1>
              <h1
                data-aos="fade-up"
                className="text-5xl font-bold uppercase text-shadow"
              >
                A healthy fruit
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur soluta modi optio suscipit ex ipsum minus hic,
                voluptates accusantium dolor!
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="border border-white px-4 py-2 rounded-lg"
              >
                Show Shop
              </button>
            </div>

            {/* Image Section */}
            <div>
              <img
                data-aos="zoom-in"
                className="img-shadow relative z-[1] w-[800px] mb-14"
                src={HeroPng}
                alt="berries"
              />
            </div>

            {/* Blank Div Section for Desktop Screens */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* Large Background Text */}
        <h1
          data-aos="zoom-out"
          className="text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow"
        >
          berries
        </h1>

        {/* Sidebar */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-b from-primary to-secondary z-10 transition-transform duration-300 transform translate-x-0">
            <div className="w-full h-full flex flex-col items-center justify-center text-white space-y-6">
              {/* Top Line */}
              <div className="w-[1px] h-[70px] bg-white"></div>

              {/* Social Icons */}
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaFacebookF className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaLinkedinIn className="text-2xl" />
              </div>

              {/* Bottom Line */}
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        )}

        {/* Sidebar Overlay */}
        {sidebar && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-[9]"
            onClick={() => setSidebar(false)}
          ></div>
        )}
      </section>
    </main>
  );
};

export default Hero;


// import Navbar from "../navbar/Navbar";
// import HeroImg from "../../assets/Strawbarreis.png";
// import React, { useState } from "react";
// import { RiFacebookCircleLine } from "react-icons/ri";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import { BsInstagram } from "react-icons/bs";
// import { RiMenuLine, RiCloseLine } from "react-icons/ri";

// const Hero = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <main className="bg-primaryDark py-6 px-4 md:py-12 md:px-16 shadow-lg">
//         {/* Sidebar */}
//         <div
//           className={`fixed top-0 left-0 h-full w-[250px] bg-primaryDark shadow-lg transform ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-300 z-40`}
//         >
//           <div className="p-6 text-white">
//             <button
//               className="text-2xl absolute top-4 right-4"
//               onClick={toggleSidebar}
//             >
//               <RiCloseLine />
//             </button>
//             <h1 className="text-2xl font-bold mb-8">My Sidebar</h1>
//             <ul className="space-y-6">
//               <li className="flex items-center gap-4 text-lg hover:text-secondary transition">
//                 <RiFacebookCircleLine />
//                 <a href="#">Home</a>
//               </li>
//               <li className="flex items-center gap-4 text-lg hover:text-secondary transition">
//                 <AiOutlineLinkedin />
//                 <a href="#">About</a>
//               </li>
//               <li className="flex items-center gap-4 text-lg hover:text-secondary transition">
//                 <BsInstagram />
//                 <a href="#">Profile</a>
//               </li>
//               <li className="flex items-center gap-4 text-lg hover:text-secondary transition">
//                 <RiMenuLine />
//                 <a href="#">Settings</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Sidebar Overlay */}
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-30"
//             onClick={toggleSidebar}
//           ></div>
//         )}

//         <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl overflow-hidden">
//           <div className="container mx-auto">
//             {/* Navbar */}
//             <div className="flex justify-between items-center">
//               <button
//                 className="text-2xl text-white hover:text-secondary md:hidden"
//                 onClick={toggleSidebar}
//               >
//                 <RiMenuLine />
//               </button>
//               <Navbar />
//             </div>

//             {/* Grid Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
//               {/* Text Container */}
//               <div className="text-white space-y-6 py-6 px-4 md:mt-0">
//                 <h1 className="text-3xl md:text-4xl pl-6 md:pl-10">
//                   1________
//                 </h1>
//                 <h1 className="text-5xl font-bold uppercase text-shadow">
//                   A Healthy Fruit
//                 </h1>
//                 <p className="text-sm md:text-base">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Dolorem unde nam pariatur voluptate quibusdam vero architecto?
//                   Nobis, cumque recusandae ullam unde tenetur deleniti illo hic
//                   eum. Veritatis fuga illum sint sequi. Doloribus perspiciatis
//                   corrupti in optio incidunt omnis distinctio ab?
//                 </p>
//                 <button className="px-6 py-2 bg-secondary text-white font-semibold rounded-lg hover:text-green-600 shadow-md border border-white transition-all">
//                   Show-Shop
//                 </button>
//               </div>

//               {/* Image Container */}
//               <div>
//                 <img
//                   src={HeroImg}
//                   alt="Not Found"
//                   className="img-shadow w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] relative z-[1]"
//                 />
//               </div>

//               {/* Empty Container */}
//               <div className="hidden md:block"></div>
//             </div>
//           </div>

//           {/* Overlay Text */}
//           <h1 className="text-white text-[80px] font-bold sm:text-[120px] md:text-[150px] lg:text-[180px] absolute z-0 w-full uppercase text-shadow bottom-0 text-center">
//             Berries
//           </h1>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Hero;
