import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import Toast from 'vue-dk-toast';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPen, faTrash, faHome } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

library.add(faPen, faTrash, faHome);

app.component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).use(Toast)
  .mount('#app');
