import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
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
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          centeredSlides={false}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false
          }}
          loop={true}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30
            },
            1536: {
              slidesPerView: 7,
              spaceBetween: 35
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