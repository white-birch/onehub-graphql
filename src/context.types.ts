import AffiliatesApi from './resources/affiliates/AffiliatesApi';
import PortalsApi from './resources/portals/PortalsApi';
import UsersApi from './resources/users/UsersApi';

export interface Context {
  token: string;
  traceId: string;
  dataSources: {
    affiliatesApi: AffiliatesApi;
    portalsApi: PortalsApi;
    usersApi: UsersApi;
  };
}
