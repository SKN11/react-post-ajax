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
    console.log('axios request interceptors start');
    console.log(request);
    console.log('axios request interceptors end');
    return request
},error => {
    console.log('axios request error interceptors starts' );
    console.log(error);
    console.log('axios request error interceptors ends');
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    console.log('axios response interceptors start');
    console.log(response);
    console.log('axios response interceptors end');
    return response
},error => {
    console.log('axios response error interceptors start');
    console.log(error);
    console.log('axios response error interceptors end');
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
