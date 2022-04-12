import { createApp } from 'vue'
import App from './App.vue'
import LegoBricks from 'lego-bricks'
import 'lego-bricks/dist/bundle.css'

const app = createApp(App)
app.use(LegoBricks)
app.mount('#app')
