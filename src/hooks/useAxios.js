import axios from 'axios';
import { useState } from 'react';

import config from '../config/';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState(null);

  const get = async (options = { urlEndPoint: '', baseUrl: '' }) => {
    try {
      setLoading(true);

      const url = options.baseUrl ? options.baseUrl : config.apiUrl + options.urlEndPoint;
      const response = await axios.get(url, { headers: { Accept: 'application/vnd.github.v3+json' } });

      setLoading(false);
      return handleSuccess({ data: response.data });
    } catch (error) {
      setLoading(false);
      return handleError(error);
    }
  };

  const handleSuccess = (data = {}) => {
    setResponse(data);
    return data;
  };
  const handleError = (error) => {
    setError(error);
    return error;
  };

  return { get, status: { response, errors, loading } };
};

export default useAxios;
