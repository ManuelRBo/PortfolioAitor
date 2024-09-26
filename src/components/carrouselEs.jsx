import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { useState } from "react";
import Galeria from "./galeria";
import { graficas1, graficas2 } from "./graficas";

const SwiperCarouselEs = () => {
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
                Simulacion Problema de los Dos Cuerpos
              </h4>
              <p className="text-sm lg:text-base">
                En mecánica, el problema de los dos cuerpos se refiere a la
                tarea de describir el movimiento de dos partículas puntuales que
                interactúan únicamente entre sí. Ejemplos comunes de este
                fenómeno son la órbita de la Luna alrededor de la Tierra. En
                esta simulación replicamos (mediante MATLAB) las condiciones
                inerciales, estudiamos su comportamiento frente a la atracción
                gravitatoria representando hodógrafas y geometrías.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/problemaDosCuerpos/informeDosCuerpos.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe
                </a>
                <button
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                  onClick={() => openGaleria(graficas1)}
                >
                  Ver Graficas
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
                Simulación Impacto Sobre un Sólido Articulado
              </h4>
              <p className="text-sm lg:text-base">
                Se analizar el impacto de una partícula sobre un sólido
                articulado y estudiar el movimiento resultante del sólido tras
                la colisión. Se ha modelado la partícula, evaluando la
                distribución de fuerzas y reacciones, así como las
                transferencias de momento y energía involucradas.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/impactoSolidoArticulado/informeImpacto.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe
                </a>
                <a
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                  onClick={() => openGaleria(graficas2)}
                >
                  Ver Graficas
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
                Diseño y Fabricación Perfil Aerodinámico
              </h4>
              <p className="text-sm lg:text-base">
                Diseño de un modelo basado en las cotas especificadas para
                ensayos aerodinámicos; definiendo el despiece, el proceso de
                fabricación y montaje, asegurando que el perfil esté soportado
                por tres costillas y dos largueros. El interior debe ser
                accesible para la instalación de la instrumentación de medición,
                utilizando titanio como material.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/diseñoFabricacion/diseñoFabricacionPerfilAereo.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-2 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Estudio Completo Actuaciones A220-100
              </h4>
              <p className="text-sm lg:text-base">
                El trabajo se centra en el análisis del comportamiento de un
                avión real en sus actuaciones básicas, despegue y aterrizaje,
                utilizando fundamentos teóricos y datos extraídos de manuales y
                bibliografía de fabricantes. Se evalúan aspectos clave como la
                aceleración, velocidad y distancias requeridas en estas fases
                críticas. Además, se lleva a cabo un análisis del perfil
                aerodinámico (Theodorsen y TPL) para comprender la respuesta
                aerodinámica del avión. Se concluye con una evaluación del
                comportamiento de las alas y de la estabilidad estática
                longitudinal del avión, proporcionando una visión integral de su
                rendimiento en vuelo
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/estudioActuaciones/informeActuacionesBasicas.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe 1
                </a>
                <a
                  href="/estudioActuaciones/informeCarreraTof.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe 2
                </a>
                <a
                  href="/estudioActuaciones/informeAlasEstabilidad.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe 3
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-4 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Previsión Tráfico Aéreo MAD
              </h4>
              <p className="lg:text-base text-sm">
                Análisis del tránsito aéreo en el aeropuerto de Adolfo
                Suárez-Madrid Barajas, centrándose en el perfil de los pasajeros
                y su distribución, con la finalidad de proyectar el tráfico
                aéreo a diez años vista.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-10 lg:right-10">
                <a
                  href="/previsionesTraficoAereo/informeTraficoAereo.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Ver Informe
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

export default SwiperCarouselEs;
