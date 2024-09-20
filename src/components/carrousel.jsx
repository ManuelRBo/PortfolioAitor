import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

const SwiperCarousel = () => {
  return (
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
            slidesPerView: 2,
            spaceBetween: 10 ,
            centeredSlides: false,
          },
        }}
        className="relative shadow-xl shadow-black/50 rounded-xl bg-gradient-to-b from-white to-black/65"
      >
        <SwiperSlide>
          <div className="bg-black/90 text-white p-7 h-[380px] flex flex-col gap-4  lg:gap-7 rounded-xl">
            <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
              Simulacion Problema de los Dos Cuerpos
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              convallis dolor. Nam vitae libero a sapien fringilla viverra eu
              non ligula.{" "}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="/problemaDosCuerpos/informeDosCuerpos.pdf"
                target="_blank"
                className="border-white border px-3 py-2 rounded-md"
              >
                Ver Informe
              </a>
              <a className="border-white border px-3 py-2 rounded-md">
                Ver Graficas
              </a>
              <a
                href="/problemaDosCuerpos/DosCuerposScriptClase.m"
                download
                className="border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2"
              >
                <p>Script</p>
                <img src="/download.svg" alt="download" width={13} />
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bg-black/90 text-white p-7 flex flex-col h-[380px]  gap-4 lg:gap-7 rounded-xl">
          <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
            Simulación Impacto Sobre un Sólido Articulado
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            convallis dolor. Nam vitae libero a sapien fringilla viverra eu non
            ligula.{" "}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="/impactoSolidoArticulado/informeImpacto.pdf"
              target="_blank"
              className="border-white border px-3 py-2 rounded-md"
            >
              Ver Informe
            </a>
            <a className="border-white border px-3 py-2 rounded-md">
              Ver Graficas
            </a>
            <a
              href="/impactoSolidoArticulado/ImpactoScriptClase.m"
              download
              className="border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <p>Script</p>
              <img src="/download.svg" alt="download" width={13} />
            </a>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bg-black/90 text-white p-7 flex flex-col h-[380px]  gap-4 lg:gap-7 rounded-xl">
          <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
            Diseño y Fabricación Perfil Aerodinámico
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            convallis dolor. Nam vitae libero a sapien fringilla viverra eu non
            ligula.{" "}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="/diseñoFabricacion/diseñoFabricacionPerfilAereo.pdf"
              target="_blank"
              className="border-white border px-3 py-2 rounded-md"
            >
              Ver Informe
            </a>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bg-black/90 text-white p-7 flex flex-col h-[380px]  gap-4 lg:gap-7 rounded-xl">
          <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
            Estudio Completo Actuaciones A220-100
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            convallis dolor. Nam vitae libero a sapien fringilla viverra eu non
            ligula.{" "}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="/estudioActuaciones/informeActuacionesBasicas.pdf"
              target="_blank"
              className="border-white border px-3 py-2 rounded-md"
            >
              Ver Informe 1
            </a>
            <a
              href="/estudioActuaciones/informeCarreraTof.pdf"
              target="_blank"
              className="border-white border px-3 py-2 rounded-md"
            >
              Ver Informe 2
            </a>
            <a
              href="/estudioActuaciones/informeAlasEstabilidad.pdf"
              target="_blank"
              className="border-white border px-3 py-2 rounded-md"
            >
              Ver Informe 3
            </a>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bg-black/90 text-white p-7 flex flex-col h-[380px]  gap-4 lg:gap-7 rounded-xl">
          <h4 className="font-semibold text-xl text-center md:text-2xl lg:text-3xl">
            Previsión Tráfico Aéreo MAD
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            convallis dolor. Nam vitae libero a sapien fringilla viverra eu non
            ligula.{" "}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="/previsionesTraficoAereo/informeTraficoAereo.pdf"
              target="_blank"
              className="border-white border px-3 py-2 rounded-md"
            >
              Ver Informe
            </a>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperCarousel;
