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
        spaceBetween={20} // Espacio entre diapositivas
        slidesPerView={1.3} // Número de diapositivas visibles
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
      className="h-[350px] relative"
    >
      <SwiperSlide>
        <div className='flex h-full text-white'>
            <div className="bg-gray-500 h-full w-3/4"></div>
            <div className='bg-black h-full flex-grow p-7 flex flex-col gap-5 relative'>
                <h4 className='font-semibold text-4xl'>Slide 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <button className='absolute bottom-10 right-14 border-white border px-3 py-2'>
                    <img src="/download.svg" alt="download" width={25}/>
                </button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex h-full text-white'>
            <div className="bg-gray-500 h-full w-3/4"></div>
            <div className='bg-black h-full flex-grow p-7 flex flex-col gap-5 relative'>
                <h4 className='font-semibold text-4xl'>Slide 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <button className='absolute bottom-10 right-14 border-white border px-3 py-2'>
                    <img src="/download.svg" alt="download" width={25}/>
                </button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex h-full text-white'>
            <div className="bg-gray-500 h-full w-3/4"></div>
            <div className='bg-black h-full flex-grow p-7 flex flex-col gap-5 relative'>
                <h4 className='font-semibold text-4xl'>Slide 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <button className='absolute bottom-10 right-14 border-white border px-3 py-2'>
                    <img src="/download.svg" alt="download" width={25}/>
                </button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex h-full text-white'>
            <div className="bg-gray-500 h-full w-3/4"></div>
            <div className='bg-black h-full flex-grow p-7 flex flex-col gap-5 relative'>
                <h4 className='font-semibold text-4xl'>Slide 4</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis dolor. Nam vitae libero a sapien fringilla viverra eu non ligula. </p>
                <button className='absolute bottom-10 right-14 border-white border px-3 py-2'>
                    <img src="/download.svg" alt="download" width={25}/>
                </button>
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
