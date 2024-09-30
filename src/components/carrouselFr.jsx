import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { useState } from "react";
import Galeria from "./galeria";
import { graficas1, graficas2 } from "./graficas";

const SwiperCarouselFr = () => {
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
          centeredSlides={true} // Centre la diapositive active
          spaceBetween={30} // Espace entre les diapositives
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
                Simulation du Problème à Deux Corps
              </h4>
              <p className="text-sm lg:text-base">
                En mécanique, le problème à deux corps se réfère à la tâche de
                décrire le mouvement de deux particules ponctuelles qui
                n'interagissent qu'entre elles. Des exemples courants de ce
                phénomène incluent l'orbite de la Lune autour de la Terre. Dans
                cette simulation, nous reproduisons (en utilisant MATLAB) les
                conditions inertielles et étudions leur comportement sous
                attraction gravitationnelle en représentant des hodographes et
                des géométries.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/problemaDosCuerpos/informeDosCuerpos.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport
                </a>
                <button
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                  onClick={() => openGaleria(graficas1)}
                >
                  Voir les Graphiques
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
                Simulation d'Impact sur un Solide Articulé
              </h4>
              <p className="text-sm lg:text-base">
                L'impact d'une particule sur un solide articulé est analysé, et
                le mouvement résultant du solide après la collision est étudié.
                La particule a été modélisée, évaluant la distribution des
                forces et des réactions, ainsi que les transferts de quantité de
                mouvement et d'énergie impliqués.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/impactoSolidoArticulado/informeImpacto.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport
                </a>
                <a
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                  onClick={() => openGaleria(graficas2)}
                >
                  Voir les Graphiques
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
                Conception et Fabrication de Profil Aérodynamique
              </h4>
              <p className="text-sm lg:text-base">
                Conception d'un modèle basé sur les dimensions spécifiées pour
                les tests aérodynamiques, définissant la décomposition des
                pièces, le processus de fabrication et d'assemblage, en
                s'assurant que le profil aérodynamique est soutenu par trois
                nervures et deux longerons. L'intérieur doit être accessible
                pour l'installation d'instruments de mesure, en utilisant le
                titane comme matériau.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/diseñoFabricacion/diseñoFabricacionPerfilAereo.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-2 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Étude Complète des Actions A220-100
              </h4>
              <p className="text-sm lg:text-base">
                Le travail se concentre sur l'analyse du comportement d'un avion
                réel dans ses performances de base, décollage et atterrissage,
                en utilisant des fondements théoriques et des données extraites
                des manuels et de la littérature du fabricant. Des aspects clés
                tels que l'accélération, la vitesse et les distances requises
                dans ces phases critiques sont évalués. De plus, une analyse du
                profil aérodynamique (Theodorsen et TPL) est réalisée pour
                comprendre la réponse aérodynamique de l'avion. L'étude se
                conclut par une évaluation du comportement de l'aile et de la
                stabilité statique longitudinale de l'avion, fournissant une vue
                d'ensemble de ses performances en vol.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-7 lg:right-10">
                <a
                  href="/estudioActuaciones/informeActuacionesBasicas.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport 1
                </a>
                <a
                  href="/estudioActuaciones/informeCarreraTof.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport 2
                </a>
                <a
                  href="/estudioActuaciones/informeAlasEstabilidad.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport 3
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/90 text-white p-6 flex flex-col h-[500px] lg:h-[380px] gap-4 rounded-xl">
              <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
                Prévisions du Trafic Aérien MAD
              </h4>
              <p className="lg:text-base text-sm">
                Analyse du trafic aérien à l'aéroport Adolfo Suárez-Madrid
                Barajas, en se concentrant sur le profil des passagers et leur
                distribution, dans le but de projeter le trafic aérien pour les
                dix prochaines années.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 lg:absolute lg:bottom-10 lg:right-10">
                <a
                  href="/previsionesTraficoAereo/informeTraficoAereo.pdf"
                  target="_blank"
                  className="border-white border px-3 py-2 rounded-md hover:text-black hover:bg-white transition-colors"
                >
                  Voir le Rapport
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

export default SwiperCarouselFr;
