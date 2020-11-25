import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter }from 'vue-router'
import Logan from './components/Logan.vue'
import Logan2 from './components/Logan2.vue'



const history =createWebHashHistory()
const  router=createRouter({
  history:history,
  routes:[{
    path:'/',
    component:Logan
  },{
    path:'/2',
    component:Logan2
  }
]
})

const app=createApp(App)
app.use(router)
app.mount('#app')

