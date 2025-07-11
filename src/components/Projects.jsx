import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  function CustomPrevArrow({ onClick }) {
    return (
      <div
        className="absolute max-[1050px]:hidden left-[-20px] top-1/2 -translate-y-1/1 z-10 cursor-pointer text-white p-2 rounded-full bg-slate-700 hover:bg-cyan-500 transition-all"
        onClick={onClick}
      >
        <ChevronLeft size={36} />
      </div>
    );
  }

  function CustomNextArrow({ onClick }) {
    return (
      <div
        className="absolute max-[1050px]:hidden right-[-20px] top-1/2 -translate-y-1/1 z-10 cursor-pointer text-white p-2 rounded-full bg-slate-700 hover:bg-cyan-500 transition-all"
        onClick={onClick}
      >
        <ChevronRight size={36} />
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-20 mt-15 px-4 sm:py-20 sm:px-4 md:py-20 md:px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        <Slider
          {...settings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          className="px-2 md:px-8 z-0 relative"
        >
          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-950 p-6 rounded-xl shadow-black/50 shadow-[10px_10px_10px] flex flex-col">
                <img
                  src="/Portfolio.png"
                  alt="Portfolio"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-white tracking-wide mb-2">
                  Personal Portfolio
                </h3>
                <p className="text-md text-white text-justify">
                  This is a personal portfolio website developed to showcase my
                  information, projects, and technical skills. It includes a
                  clean user interface and responsive design to provide a smooth
                  browsing experience for visitors.
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Technologies: React, JavaScript, Tailwind CSS, Vercel
                </p>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/Chaves31/Personal-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-900 !text-black visited:!text-black hover:!text-white px-4 py-2 rounded shadow-md transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://eddychaves.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-800 hover:bg-red-400  !text-white visited:!text-white hover:!text-black px-4 py-2 rounded shadow-md transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="bg-gray-950 p-6 rounded-xl shadow-black/50 shadow-[10px_10px_10px] flex flex-col">
                <img
                  src="/TuLook.png"
                  alt="TuLook"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-white tracking-wide mb-2">
                  TuLook
                </h3>
                <p className="text-md text-white text-justify">
                  TuLook is a platform that connects hairstylists and barbers
                  with their clients. Professionals can create profiles, offer
                  services, and manage bookings, while clients can explore
                  options, check availability, and schedule appointments
                  directly.
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Technologies: PHP, Laravel, React, JavaScript
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/Encanto-ITM/TuLook-Desarrollo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-900 !text-black visited:!text-black hover:!text-white px-4 py-2 rounded shadow-md transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://tulook.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-800 hover:bg-red-400  !text-white visited:!text-white hover:!text-black px-4 py-2 rounded shadow-md transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="bg-gray-950 p-6 rounded-xl shadow-black/50 shadow-[-10px_10px_10px] flex flex-col">
                <img
                  src="/API.png"
                  alt="API HotelBeachSA"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-white tracking-wide mb-2">
                  API Web HotelBeachSA
                </h3>
                <p className="text-md text-white text-justify">
                  I developed an API to manage clients, packages, and
                  reservations. I optimized its performance, reducing response
                  time by 20%. I implemented MVC architecture to improve system
                  scalability. This reduced maintenance times by 30%.
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Technologies: .NET, C#, .NET MVC
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/Chaves31/ApiWebHotelBeachSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-900 !text-black visited:!text-black hover:!text-white px-4 py-2 rounded shadow-md transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href="http://www.apiwebhotel.somee.com/Usuarios/Listado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-800 hover:bg-red-400  !text-white visited:!text-white hover:!text-black px-4 py-2 rounded shadow-md transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="bg-gray-950 p-6 rounded-xl shadow-black/50 shadow-[10px_10px_10px] flex flex-col">
                <img
                  src="HotelBeachSA.png"
                  alt="HotelBeachSA"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-white tracking-wide mb-2">
                  HotelBeachSA
                </h3>
                <p className="text-md text-white text-justify">
                  Beach S.A. is a hotel management platform developed as a
                  university project. It allows administrative staff to register
                  guests, manage room availability, and efficiently manage
                  reservations through a streamlined interface.
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Technologies: .NET, C#, .NET MVC
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/Chaves31/HotelBeachSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-900 !text-black visited:!text-black hover:!text-white px-4 py-2 rounded shadow-md transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href="http://sitiehotelbeachsa.somee.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-800 hover:bg-red-400  !text-white visited:!text-white hover:!text-black px-4 py-2 rounded shadow-md transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="grid md:grid-cols-2 gap-8 
                mb-16 sm:mb-8 sm:pb-4"
            >
              <div className="bg-gray-950 p-6 rounded-xl shadow-black/50 shadow-[-10px_10px_10px] flex flex-col">
                <img
                  src="TasKing.png"
                  alt="TasKing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-white tracking-wide mb-2">
                  TasKing
                </h3>
                <p className="text-md text-white text-justify">
                  TasKing is a collaborative web application that helps users
                  organize and manage their tasks, events, and responsibilities
                  through a dynamic and interactive calendar. It includes
                  features such as event reminders and activity tracking.
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Technologies: PHP, Laravel, React, JavaScript
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/Jeranguz/Proyecto_interactivas2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-900 !text-black visited:!text-black hover:!text-white px-4 py-2 rounded shadow-md transition-all"
                  >
                    GitHub Frontend
                  </a>
                  <a
                    href="https://github.com/Jeranguz/interactivas_backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-800 hover:bg-red-400  !text-white visited:!text-white hover:!text-black px-4 py-2 rounded shadow-md transition-all"
                  >
                    GitHub Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
