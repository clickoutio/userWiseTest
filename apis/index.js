import ax from 'axios';
import results from './helpers/results';

ax.defaults.headers.post['Content-Type'] = 'application/json';
ax.defaults.validateStatus = (status) => status >= 200 && status < 500; // default

const axios = ax.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

axios.CancelToken = ax.CancelToken;
axios.isCancel = ax.isCancel;

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(results.success(response.data));
    }
    return Promise.resolve(results.fail(response));
  },
  (error) => Promise.resolve(results.fail(error)),
);

export { axios };
