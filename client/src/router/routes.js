
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Admin
      { path: '/inicio_administrador', component: () => import('pages/admin/Inicio.vue') },
      { path: '/examenes', component: () => import('pages/admin/Examenes.vue') },
      { path: '/tests/:id', component: () => import('pages/admin/Tests.vue') },
      { path: '/tests_exam/:id', component: () => import('pages/admin/TestsExam.vue') },
      { path: '/edit_test/:id', component: () => import('pages/admin/EditTest.vue') },
      { path: '/exam/:id', component: () => import('pages/admin/Exam.vue') },
      { path: '/questions', component: () => import('pages/admin/Questions.vue') },
      // User
      { path: '/inicio', component: () => import('pages/user/Inicio.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/registro', component: () => import('pages/Registro.vue') },
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
