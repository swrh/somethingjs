import knex from 'knex';
import path from 'path';

import * as configuration from '../../knexfile';

const connection = knex(configuration);

export default connection;
