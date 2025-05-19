import { createRouter, createWebHistory } from 'vue-router'
import TableView  from "@/views/TableView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'table',
      component: TableView,
      meta: {title:'Rowflow-table'}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {title:'Rowflow login'}
    },
  ],
})

// router.beforeEach((to) =>{
//   document.title = to.meta.title || 'RowFlow'
// })

export default router
