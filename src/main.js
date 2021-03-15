import { createApp } from 'vue'
import elementUi from  "./element/element"

// import VueLazyLoad from "vue-lazyload"
import store from "./store/store.js"
import  "animate.css"
import App from './App.vue'
import mitt from "mitt"

 const app= createApp(App)
app.use(elementUi).use(store)
app.config.globalProperties.$allbus=new mitt();

 app.mount('#app')
 


