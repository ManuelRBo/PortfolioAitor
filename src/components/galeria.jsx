import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

const Galeria = ({closeGaleria, graficas}) => {
  return (
    <>
      <div className="bg-gray-100/95 w-full h-full absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 256 256"
        className="absolute top-5 right-0 -translate-x-[50%] z-30 cursor-pointer"
        onClick={closeGaleria}
      >
        <path
          fill="#000000"
          d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
        />
      </svg>
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] swiper-container z-30 w-[300px] md:w-[500px]">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          centeredSlides={true} // Centra la diapositiva activa
          spaceBetween={30} // Espacio entre diapositivas
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".galeria-pagination",
            type: "bullets",
          }}
        >
          {graficas.map((grafica) => (
            <SwiperSlide key={grafica.id}>
              <img src={grafica.img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next galeria"></div>
        <div className="swiper-button-prev galeria"></div>
        <div className="galeria-pagination"></div>
      </div>
    </>
  );
};

export default Galeria;
