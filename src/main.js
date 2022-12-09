import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {
  loadFonts
} from './plugins/webfontloader'
import store from './store/store'

loadFonts()

let app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')