import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  CarouselContainer,
  TechSlide,
  TechIcon,
  TechName,
  CarouselWrapper
} from './techCarousel.styles';

const TechCarousel = ({ technologies = [] }) => {
  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={3}
          speed={600}
          allowTouchMove={true}
          grabCursor={true}
          preventInteractionOnTransition={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 12,
              centeredSlides: true
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
              centeredSlides: true
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: true
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
              centeredSlides: true
            }
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <TechSlide>
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default TechCarousel;