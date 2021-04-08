
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/inicio_administrador', component: () => import('pages/admin/Inicio.vue') },
      { path: '/temas/:id', component: () => import('pages/admin/Temas.vue') },
      { path: '/test/:id', component: () => import('pages/admin/Test.vue') },
      { path: '/exam/:id', component: () => import('pages/admin/Exam.vue') },
      { path: '/questions', component: () => import('pages/admin/Questions.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
