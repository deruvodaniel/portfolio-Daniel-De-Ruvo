import ClientsCarousel from 'components/ui/ClientsCarousel';
import { clients } from '../../../arrays/arrayClients';
import { TabContent } from './experience.styles';

export const ClientsTab = () => {
  return (
    <TabContent
      key="clients"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ClientsCarousel clients={clients} />
    </TabContent>
  );
};
