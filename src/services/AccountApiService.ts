
// const client = require('@/config/client');

import axios from 'axios';

export default {

  get(endpoint: string) {
    return axios({ method: 'GET', url: endpoint });
  },
};
