interface Context {
  traceId: string;
  dataSources: {
    affiliatesApi: AffiliatesApi;
    portalsApi: PortalsApi;
  };
}
