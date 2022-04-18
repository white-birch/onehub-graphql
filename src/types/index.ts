import AffiliatesApi from '../dataSources/AffiliatesApi';
import PortalsApi from '../dataSources/PortalsApi';
import UsersApi from '../dataSources/UsersApi';

export interface Context {
  traceId: string;
  dataSources: {
    affiliatesApi: AffiliatesApi;
    portalsApi: PortalsApi;
    usersApi: UsersApi;
  };
}
