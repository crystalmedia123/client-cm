const axios = require('axios');

// 1. GET token from localStorage and set ${token}
// 2. Define Header for call. set ${headers}
// 3. Define POST, GET, DELETE, UPDATE calls

const NetworkConfig = async (data) => {
  var token = window.localStorage.getItem('token') || [];

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  };

  // GET
  if (data.body.length === 0) {
    const response = await axios.get(data.path, headers);
    return response;
  }

  // GET EXCHANGE
  if (data.type === 'getex') {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Encoding': 'deflate, gzip',
        'X-CMC_PRO_API_KEY': 'f0e1256a-2613-4d60-8df2-afe06fb0fe88'
      }
    };
    const response = await axios.get(data.path, headers);

    return response;
  }

  // POST IMAGES
  if (data.type === 'file') {
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `bearer ${token}`
      }
    };
    const response = await axios.post(data.path, data.body, headers);

    return response;
  }

  // PUT TEXT
  if (data.type === 'text') {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      }
    };
    const response = await axios.put(data.path, data.body, headers);

    return response;
  }

  // POST TEXT
  if (data.type === 'textpost') {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      }
    };
    const response = await axios.post(data.path, data.body, headers);

    return response;
  }

  // POST
  if (data.method === 'post') {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      }
    };
    const response = await axios.post(data.path, data.body, headers);

    return response;
  }

  // DELETE
  if (data.method === 'delete') {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      }
    };
    const response = await axios.delete(data.path, data.body, headers);

    return response;
  }
};

export default NetworkConfig;
