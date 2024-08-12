import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@fortawesome/fontawesome-free/css/all.min.css";

loadFonts();

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(fas);

const app = createApp(App);

// app.component("font-awesome-icon", FontAwesomeIcon);

let isAlertError = true;
window.addEventListener("error", (event) => {
    if (isAlertError) {
        isAlertError = false;
        alert(event.message);
        console.log(event.error);
        setTimeout(() => isAlertError = true, 2000);
    }
});

app.use(vuetify).mount("#app");
