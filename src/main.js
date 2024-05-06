import './assets/main.css'
import { computed, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { axiosInstance } from './plugins/axios'

window.axios = axiosInstance

const app = createApp(App)

app.use(router)
app.mixin({
    computed:{
        headers(){
            return{
                headers:{
                    "Authorization":"Bearer "+this.$store.state.user.access
                }
            }
        }
        
    } 
})
app.use(store)


app.mount('#app')
