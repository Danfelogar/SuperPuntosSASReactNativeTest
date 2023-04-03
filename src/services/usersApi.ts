import axios from 'axios';

import {BASE_URL} from '../utils';

const usersApi = axios.create({baseURL: BASE_URL});

export default usersApi;
