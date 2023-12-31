import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import router from './router';
import 'swiper/css/bundle';
import './assets/css/fontAwesome5Pro.css';
import 'bootstrap';
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import './assets/scss/main.scss';
import VeeValidate from 'vee-validate';

import { store } from './_store';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

let app = createApp(App);
app.use(router)
app.use(store)
app.use(VeeValidate)
app.use(BootstrapVue3);
app.mount('#app');
