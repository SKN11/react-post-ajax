import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='Auth Token'
axios.defaults.headers.post['Content-Type']='application/json'

axios.interceptors.request.use(request => {
    console.log('axios request interceptors');
    console.log(request);
    return request
},error => {
    console.log('axios request error interceptors');
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    console.log('axios response interceptors');
    console.log(response);
    return response
},error => {
    console.log('axios response error interceptors');
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();