import AffiliatesApi from './resources/affiliates/AffiliatesApi.dataSource';
import PortalsApi from './resources/portals/PortalsApi.dataSource';
import TracksApi from 'resources/tracks/TracksApi.dataSource';
import UsersApi from './resources/users/UsersApi.dataSource';

export interface Context {
  token: string;
  traceId: string;
  dataSources: {
    affiliatesApi: AffiliatesApi;
    portalsApi: PortalsApi;
    tracksApi: TracksApi;
    usersApi: UsersApi;
  };
}
