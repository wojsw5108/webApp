import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Main from '@/components/main'
import Phone from '@/components/phone'
import Log from '@/components/log'
import Set from '@/components/set'
import Login from '@/components/login'
import Send from '@/components/send'
import Asep from '@/components/asep'
import Wri from '@/components/wri'
import Test from '@/components/test'
import Setcon from '@/components/Setcon'
import ResetPass from '@/components/ResetPass'
import Echarts from '@/components/echarts'

Vue.use(Router)

var obj=new Router({
    linkActiveClass:"active",
    routes: [

        {
            path:"/test",
            component:Test
        },

        {
            path: '/',
            component: Index,
            children:[
                {path:"",component:Main,name: 'Index'},
                {path:"/phone",component:Phone},

            ]
        },
        {
            path:"/login",component:Login
        },
        {
            path:"/log",
            component:Log,
            children:[
                {path:"",component:Send},
                {path:"/asep",component:Asep},
                {path:"/wri",component:Wri}
            ]
        },
        {
            path:"/set",
            component:Set,
            children:[
                {path:"",component:Setcon},
                {path:"/resetPass",component:ResetPass},
                {path:"/echarts",component:Echarts }
            ]
        }
    ]
});

obj.beforeEach(function(to,from,next){

    if(to.path=="/"||to.path=="/login"){
        next();
    }else{
        if(sessionStorage.IndexLoginInfo) {
            next();
        }else{
            next({path: "/login"});
        }
    }
})


export default obj
