import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/web/Inicio.vue'
import Nosotros from '../views/web/Nosotros.vue'
import Servicios from '../views/web/Servicios.vue'
import Login from '../views/auth/Login.vue'
import AppLayout from '../layout/AppLayout.vue'
import Perfil from '../views/admin/perfil/Perfil.vue'
import SitioLayout from '../layout/SitioLayout.vue'
import Usuario from '../views/admin/user/Usuarios.vue'



const routes = [
  //rutas para web
  {path: '/', component: SitioLayout,
    children:[
      {path:'/', component: Inicio},
      {path:'/nosotros', component: Nosotros},
      {path:'/servicios', component: Servicios},
       //ruta para autenticacion
        {
          path:'/auth/login',
          component: Login,
        },
    ]
  },
 
  //ruta para dashboard
  {
    path:"/admin",
    component: AppLayout,
    children:[
      {
        path:'perfil',
        component: Perfil,
      },
      {
        path:'usuario',
        component: Usuario,
      }
    ]
  }
]




export const router = createRouter({
  history: createWebHistory(),
  routes,
})