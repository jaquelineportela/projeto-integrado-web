import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Cadastrar from '@/components/Cadastrar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, 
    {
      path: '/cadastrar',
      name: 'Cadastrar',
      component: Cadastrar
    }
  ]
})
