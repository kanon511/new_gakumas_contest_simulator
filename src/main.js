/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

let isAlertError = true;
window.addEventListener('error', (event) => {
  if (isAlertError) {
    isAlertError = false;
    if (~event.message.indexOf('ResizeObserver')) {
      return;
    }
    alert(event.message);
    console.log(event.error);
    setTimeout(() => (isAlertError = true), 2000);
  }
});

// Composables
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
