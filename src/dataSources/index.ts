import AffiliatesApi from './AffiliatesApi';
import PortalsApi from './PortalsApi';
import UsersApi from './UsersApi';

const getDataSources = () => {
  return {
    affiliatesApi: new AffiliatesApi(),
    portalsApi: new PortalsApi(),
    usersApi: new UsersApi(),
  };
};

export default getDataSources;
