import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SimpleProjectCard from '../SimpleProjectCard';
import { MobileCarouselWrapper, CarouselProgress } from './projectsCarousel.styles';

const MobileCarousel = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <MobileCarouselWrapper>
      <Swiper
        modules={[Pagination, Navigation, Keyboard]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
        className="projects-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <SimpleProjectCard project={project} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselProgress>
        <motion.div
          style={{
            height: '100%',
            background: 'var(--gradientPrimary)',
            borderRadius: '4px',
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${((currentPage + 1) / projects.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </CarouselProgress>
    </MobileCarouselWrapper>
  );
};

export default MobileCarousel;
