import axios from "axios"
export const http = axios.create({
    baseURL: 'http://localhost:3003',
    timeout: 5000,
    headers: {
      'Accept': 'applicationjson',
      //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
  });


  export const SERVER_URL = 'https://server-theta-seven-20.vercel.app'
    // export const SERVER_URL = 'http://localhost:3003'