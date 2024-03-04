import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AgendaEditView from '../views/AgendaEditView.vue'
import ModuleView from '../views/ModuleView.vue'
import SubModuleView from '../views/SubModuleView.vue'
import SubModuleCreateView from '../views/SubModuleCreateView.vue'
import SubModuleDetailView from '../views/SubModuleDetailView.vue'
import SubModuleEditView from '../views/SubModuleEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
    { path: '/agenda/edit/:id', name: 'agenda', component: AgendaEditView },
    { path: '/module', name: 'module', component: ModuleView },
    { 
      path: '/sub-module',
      name: 'sub-module',
      component: SubModuleView,
      children: [
        {
          path: 'create',
          component: SubModuleCreateView,
        },
        {
          path: 'detail/:id',
          component: SubModuleDetailView,
        },
        {
          path: 'edit/:id',
          component: SubModuleEditView,
        },
      ]
    },
  ]
})

export default router
