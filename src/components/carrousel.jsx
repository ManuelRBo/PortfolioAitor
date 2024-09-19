import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

const SwiperCarousel = () => {
  return (
    <div className='relative swiper-container'>
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      centeredSlides={true} // Centra la diapositiva activa
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      //   }}
      pagination={{
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      }}
      breakpoints={
        {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
        }
      }
      className="h-[620px] md:h-[350px] relative"
    >
      <SwiperSlide>
        <div className='flex max-md:flex-col h-full text-white'>
        <div className="bg-gray-500 w-full h-2/5 md:h-full md:w-2/4"></div>
        <div className='bg-black h-3/5 p-5 flex flex-col gap-5 md:h-full md:w-2/4 lg:gap-7 xl:p-7'>   
                <h4 className='font-semibold text-2xl max-w-[25ch]'>Simulacion Problema de los Dos Cuerpos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <div className='flex flex-wrap gap-4'>
                <a href='/problemaDosCuerpos/informeDosCuerpos.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe
                </a>
                <a className='border-white border px-3 py-2 rounded-md'>
                  Ver Graficas
                </a>
                <a href='/problemaDosCuerpos/DosCuerposScriptClase.m' download className='border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2'>
                  <p>Script</p>
                  <img src="/download.svg" alt="download" width={15}/>
                </a>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex max-md:flex-col h-full text-white'>
        <div className="bg-gray-500 w-full h-2/5 md:h-full md:w-2/4"></div>
        <div className='bg-black h-3/5 p-5 flex flex-col gap-5 md:h-full md:w-2/4 lg:gap-7 xl:p-7'>
            <h4 className='font-semibold text-2xl max-w-[25ch]'>Simulación Impacto Sobre un Sólido Articulado</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
            <div className='flex flex-wrap gap-4'>
                <a href='/impactoSolidoArticulado/informeImpacto.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe
                </a>
                <a className='border-white border px-3 py-2 rounded-md'>
                  Ver Graficas
                </a>
                <a href='/impactoSolidoArticulado/ImpactoScriptClase.m' download className='border-white border px-3 py-2 rounded-md flex items-center justify-center gap-2'>
                  <p>Script</p>
                  <img src="/download.svg" alt="download" width={15}/>
                </a>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex max-md:flex-col h-full text-white'>
        <div className="bg-gray-500 w-full h-2/5 md:h-full md:w-2/4"></div>
        <div className='bg-black h-3/5 p-5 flex flex-col gap-5 md:h-full md:w-2/4 lg:gap-7 xl:p-7'>
            <h4 className='font-semibold text-2xl max-w-[25ch]'>Diseño y Fabricación Perfil Aerodinámico</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <div className='flex flex-wrap gap-4'>
                <a href='/diseñoFabricacion/diseñoFabricacionPerfilAereo.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe
                </a>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex max-md:flex-col h-full text-white'>
        <div className="bg-gray-500 w-full h-2/5 md:h-full md:w-2/4"></div>
        <div className='bg-black h-3/5 p-5 flex flex-col gap-5 md:h-full md:w-2/4 lg:gap-7 xl:p-7'>
            <h4 className='font-semibold text-2xl max-w-[25ch]'>Estudio Completo Actuaciones A220-100</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <div className='flex flex-wrap gap-4'>
                <a href='/estudioActuaciones/informeActuacionesBasicas.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe 1
                </a>
                <a href='/estudioActuaciones/informeCarreraTof.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe 2
                </a>
                <a href='/estudioActuaciones/informeAlasEstabilidad.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe 3
                </a>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex max-md:flex-col h-full text-white'>
        <div className="bg-gray-500 w-full h-2/5 md:h-full md:w-2/4"></div>
        <div className='bg-black h-3/5 p-5 flex flex-col gap-5 md:h-full md:w-2/4 lg:gap-7 xl:p-7'>
            <h4 className='font-semibold text-2xl max-w-[25ch]'>Previsión Tráfico Aéreo MAD</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <div className='flex flex-wrap gap-4'>
                <a href='/previsionesTraficoAereo/informeTraficoAereo.pdf' target='_blank' className='border-white border px-3 py-2 rounded-md'>
                    Ver Informe
                </a>
                </div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className='swiper-button-next'></div>
    <div className='swiper-button-prev'></div>
    <div className='swiper-pagination'></div>
    </div>
  );
};

export default SwiperCarousel;
