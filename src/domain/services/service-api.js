const axios = require('axios');

exports.makeRequestGet = async (url, token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  
  return axios.get(url, config);
};
