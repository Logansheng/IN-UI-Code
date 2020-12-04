import {createWebHashHistory,createRouter }from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'
const history =createWebHashHistory()
 export  const router=createRouter({
  history:history,
  routes:[

    {path:'/', component:Home},
    {path:'/Doc', component:Doc,children:[
        {path:'intro',component:Intro},
        {path:'Install',component:Install},
        {path:'GetStarted',component:GetStarted},
        {path:'',redirect:'/doc/Intro'},
        {path:'switch',component:SwitchDemo},
        {path:'Button',component:ButtonDemo},
        {path:'Dialog',component:DialogDemo},
        {path:'Tabs',component:TabsDemo}
      ]}
  ]
})
router.afterEach(()=>{
  console.log('路由切换');
})