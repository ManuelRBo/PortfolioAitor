import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { useState } from "react";
import Galeria from "./galeria";
import { graficas1, graficas2 } from "./graficas";

const SwiperCarouselEn = () => {
  const [galeria, setGaleria] = useState({
    open: false,
    graficas: null,
  });

  const openGaleria = (graficas) => {
    setGaleria({
      open: true,
      graficas: graficas,
    });
  };

  const closeGaleria = () => {
    setGaleria(false);
  };

  return (
    <>
      {galeria.open && (
        <Galeria closeGaleria={closeGaleria} graficas={galeria.graficas} />
      )}
      <div className="relative swiper-container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          centeredSlides={true} // Centra la diapositiva activa
          spaceBetween={30} // Espacio entre diapositivas
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          //   }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.7,
              spaceBetween: 10,
            },
          }}
          className="relative shadow-xl shadow-black/50 rounded-xl bg-gradient-to-b from-white to-black/65"
        >
          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 h-[500px] lg:h-[380px] flex flex-col gap-4 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Two-Body Problem Simulation
              </h4>
              <p className="text-sm lg:text-base">
                In mechanics, the two-body problem refers to the task of
                describing the motion of two point particles that interact only
                with each other. Common examples of this phenomenon include the
                orbit of the Moon around the Earth. In this simulation, we
                replicate (using MATLAB) the inertial conditions and study their
                behavior under gravitational attraction by representing
                hodographs and geometries.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/problemaDosCuerpos/informeDosCuerpos.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  View Report
                </a>
                <button
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                  onClick={() => openGaleria(graficas1)}
                >
                  View Graphs
                </button>
                <a
                  href="/problemaDosCuerpos/DosCuerposScript.zip"
                  download
                  className="border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:text-black hover:bg-white hover:stroke-black transition-colors stroke-white"
                >
                  <p>Script</p>
                  <svg
                    width="13"
                    height={15}
                    viewBox="0 0 33 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 21.8333L16.1667 36L30.3333 21.8333"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1666 2V36"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-4 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Simulation of Impact on an Articulated Solid
              </h4>
              <p className="text-sm lg:text-base">
                The impact of a particle on an articulated solid is analyzed,
                and the resulting motion of the solid after the collision is
                studied. The particle has been modeled, evaluating the
                distribution of forces and reactions, as well as the transfers
                of momentum and energy involved.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/impactoSolidoArticulado/informeImpacto.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  View Report
                </a>
                <a
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                  onClick={() => openGaleria(graficas2)}
                >
                  View Graphs
                </a>
                <a
                  href="/impactoSolidoArticulado/ImpactoScript.zip"
                  download
                  className="border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:text-black hover:bg-white hover:stroke-black transition-colors stroke-white"
                >
                  <p>Script</p>
                  <svg
                    width="13"
                    height={15}
                    viewBox="0 0 33 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 21.8333L16.1667 36L30.3333 21.8333"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1666 2V36"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-4 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Design and Manufacturing of Aerodynamic Profile
              </h4>
              <p className="text-sm lg:text-base">
                Design of a model based on the specified dimensions for
                aerodynamic testing, defining the parts breakdown, the
                manufacturing and assembly process, ensuring that the airfoil is
                supported by three ribs and two spars. The interior must be
                accessible for the installation of measurement instrumentation,
                using titanium as the material.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/diseñoFabricacion/diseñoFabricacionPerfilAereo.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  View Report
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-2 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Complete Study of Actions A220-100
              </h4>
              <p className="text-sm lg:text-base">
                The work focuses on the analysis of the behavior of a real
                aircraft in its basic performances, takeoff and landing, using
                theoretical foundations and data extracted from manuals and
                manufacturer literature. Key aspects such as acceleration,
                speed, and distances required in these critical phases are
                evaluated. Additionally, an analysis of the aerodynamic profile
                (Theodorsen and TPL) is conducted to understand the aircraft's
                aerodynamic response. The study concludes with an assessment of
                the wing behavior and the aircraft's longitudinal static
                stability, providing a comprehensive view of its flight
                performance.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/estudioActuaciones/informeActuacionesBasicas.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  View Report 1
                </a>
                <a
                  href="/estudioActuaciones/informeCarreraTof.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  View Report 2
                </a>
                <a
                  href="/estudioActuaciones/informeAlasEstabilidad.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  View Report 3
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-4 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                MAD Air Traffic Forecast
              </h4>
              <p className="lg:text-base text-sm">
                Analysis of air traffic at Adolfo Suárez-Madrid Barajas Airport,
                focusing on the passenger profile and their distribution, with
                the aim of projecting air traffic for the next ten years.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-10 lg:right-10">
                <a
                  href="/previsionesTraficoAereo/informeTraficoAereo.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Report
                </a>
                <a
                  href="/previsionesTraficoAereo/traficoAereoExcel.zip"
                  download
                  className="border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:text-black hover:bg-white hover:stroke-black transition-colors stroke-white"
                >
                  <p>Excel</p>
                  <svg
                    width="13"
                    height={15}
                    viewBox="0 0 33 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 21.8333L16.1667 36L30.3333 21.8333"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1666 2V36"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default SwiperCarouselEn;
