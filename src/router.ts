import {createWebHashHistory,createRouter }from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from  './components/Markdown.vue'
import { h } from 'vue';

import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history =createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
 export  const router=createRouter({
  history:history,
  routes:[

    {path:'/', component:Home},
    {path:'/Doc', component:Doc,children:[
        { path: "Intro", component: md(intro) },
        { path: "GetStarted", component: md(getStarted) },
        { path: "Install", component: md(install) },
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