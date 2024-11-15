/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify';
import router from '@/router';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrosshairs, faGear, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
library.add(faClock);
library.add(faCrosshairs, faGear, faHourglassHalf);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export function registerPlugins(app) {
  app.component('font-awesome-icon', FontAwesomeIcon);
  app.component('RecycleScroller', RecycleScroller);
  app.use(vuetify).use(router);
}
