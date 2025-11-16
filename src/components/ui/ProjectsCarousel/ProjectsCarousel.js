import useWidth from '../../../hooks/useWidth';
import DesktopCarousel from './DesktopCarousel';
import MobileCarousel from './MobileCarousel';

const ProjectsCarousel = ({ projects }) => {
  const { width } = useWidth();
  const isMobile = width < 768;
  
  return isMobile ? (
    <MobileCarousel projects={projects} />
  ) : (
    <DesktopCarousel projects={projects} />
  );
};

export default ProjectsCarousel;
