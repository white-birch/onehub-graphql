import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

const { ONEHUB_API_BASE_URL } = process.env;

if (!ONEHUB_API_BASE_URL) {
  throw new Error('Missing environment variable: ONEHUB_API_BASE_URL');
}

class _OneHubApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ONEHUB_API_BASE_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('X-ONEHUB-TRACE-ID', this.context.traceId);
    request.headers.set('Content-Type', 'application/json');
    request.body = JSON.stringify(request.body);
  }
}

export default _OneHubApi;
