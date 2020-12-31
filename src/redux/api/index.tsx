import axios from 'axios';
const rootUrl = 'http://www.omdbapi.com/?apikey=502ed4ca';
const baseURL = 'http://www.omdbapi.com/?apikey=502ed4ca';

export const apiCall = (url, data, headers, method) => {
    const newURL = baseURL + url;

    return axios({
        method: method, 
        url: newURL,
        data,
        headers
    })
}

// export const apiCallById = (url, data, headers, method) => {
//     const newURL = rootUrl + url;

//     return axios({
//         method: method, 
//         url: newURL,
//         data,
//         headers
//     })
// }