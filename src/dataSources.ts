import { loadFilesSync } from '@graphql-tools/load-files';
import { camelCase } from 'lodash';
import path from 'path';

const getDataSources = () =>
  loadFilesSync(path.join(__dirname, '**/*.dataSource.*')).reduce(
    (acc, DataSource) => ({
      ...acc,
      [camelCase(DataSource.name)]: new DataSource(),
    }),
    {}
  );

export default getDataSources;
