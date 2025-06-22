import { createApp } from "vue"

import("@/components/App.vue").then((AppModule) => {
    createApp(AppModule.default)
    .mount("#app");
})



/**
 * - Router is imported from router.js file, where it is defined
 * - Router is then added to the app
 */