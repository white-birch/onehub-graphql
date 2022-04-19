import AffiliatesApi from './resources/affiliates/AffiliatesApi';
import PortalsApi from './resources/portals/PortalsApi';
import UsersApi from './resources/users/UsersApi';

const getDataSources = () => {
  return {
    affiliatesApi: new AffiliatesApi(),
    portalsApi: new PortalsApi(),
    usersApi: new UsersApi(),
  };
};

export default getDataSources;
