import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  CarouselContainer,
  ClientSlide,
  ClientLogo,
  ClientName,
  CarouselWrapper,
  ClientLink
} from './clientsCarousel.styles';

const ClientsCarousel = ({ clients = [] }) => {
  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={800}
          allowTouchMove={true}
          grabCursor={true}
          preventInteractionOnTransition={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 'auto',
              spaceBetween: 16,
              centeredSlides: true
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 28,
              centeredSlides: true
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 32,
              centeredSlides: false
            }
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientLink 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${client.name} website`}
              >
                <ClientSlide>
                  <ClientLogo 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    loading="lazy"
                  />
                  <ClientName>{client.name}</ClientName>
                </ClientSlide>
              </ClientLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default ClientsCarousel;
