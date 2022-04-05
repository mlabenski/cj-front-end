import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import store from './store'
//components for router
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';



loadFonts()

const app = createApp(App);
app.use(vuetify)
app.use(store)
app.use(SimpleTypeahead)
app.component('SimpleTypeAhead', SimpleTypeahead)

app.mount('#app')
