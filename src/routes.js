import Home from './components/Home.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import Menu from './components/Menu.vue'
import Register from './components/Register.vue'
import About from './components/about/About.vue'

//二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

import Phone from './components/about/Phone.vue'
import PersonName from './components/about/PersonName.vue'
export const routes =[
    {
      path:"/",components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
      }
    },
    {
      path:'/admin',component:Admin
    },
    {
      path:'/login',component:Login
    },
    {
      path:'/menu',component:Menu
    },
    {
      path:'/register',component:Register
    }, 
    {
      path:'/about',component:About,redirect:'/about/contact',children:[
        {path:'/about/contact',name:"contactLink",component:Contact,redirect:'/about/contact/phone',
        children:[
          {path:'/about/contact/phone',name:'phone',component:Phone},
          {path:'/about/contact/personName',name:'personName',component:PersonName}
        ]},
        {path:'/about/delivery',name:"deliveryLink",component:Delivery},
        {path:'/about/history',name:"historyLink",component:History},
        {path:'/about/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
      ]
    }
  ]
  