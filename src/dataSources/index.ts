import AffiliatesApi from './AffiliatesApi';
import PortalsApi from './PortalsApi';

const getDataSources = () => {
  return {
    affiliatesApi: new AffiliatesApi(),
    portalsApi: new PortalsApi(),
  };
};

export default getDataSources;
