import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; 
loadFonts()

createApp(App)
  .use(vuetify)
  .use(SimpleTypeahead)
  .mount('#app')
