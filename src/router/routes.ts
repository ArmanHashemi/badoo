import { RouteComponent } from 'vue-router'

const routes: Array<RouteComponent> = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        redirect: '/profile',
        component: () => import('pages/IndexPage.vue')
      },
      { path: '/nearby', name: 'nearby', component: () => import('pages/nearby/NearbyTab.vue') },
      { path: '/encounter', name: 'encounters', component: () => import('pages/encounters/EncounterTab.vue') },
      { path: '/chat', name: 'chat', component: () => import('pages/chat/ChatTab.vue') },
      { path: '/profile', name: 'profile', component: () => import('pages/profile/ProfileTab.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
