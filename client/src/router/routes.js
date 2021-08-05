
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Admin //
      { path: '/inicio_administrador', component: () => import('pages/admin/Inicio.vue') },
      { path: '/examenes', component: () => import('pages/admin/Examenes.vue') },
      { path: '/tests/:id', component: () => import('pages/admin/Tests.vue') },
      { path: '/tests_exam/:id', component: () => import('pages/admin/TestsExam.vue') },
      { path: '/edit_test/:id', component: () => import('pages/admin/EditTest.vue') },
      { path: '/exam/:id', component: () => import('pages/admin/Exam.vue') },
      { path: '/date_exams', component: () => import('pages/admin/DateExams.vue') },

      // costo de gestion //
      { path: '/gestion_cost', component: () => import('pages/admin/gestionCost/Form.vue') },

      // User
      { path: '/home', component: () => import('pages/user/Inicio.vue') },
      { path: '/courses', component: () => import('pages/user/Courses.vue') },
      { path: '/tests-courses/:id', component: () => import('pages/user/TestsCourses.vue') },
      { path: '/test-course/:id', component: () => import('pages/user/TestCourse.vue') },

      { path: '/exams', component: () => import('pages/user/examenes/Examenes.vue') },
      { path: '/exams/form', component: () => import('pages/user/examenes/Form.vue') },
      { path: '/exams/form/:id', component: () => import('pages/user/examenes/Form.vue') },

      { path: '/buy_exams', component: () => import('pages/user/examenes/Buy/List.vue') },
      { path: '/buy_exams/form/:id', component: () => import('pages/user/examenes/Buy/Buy.vue') },

      { path: '/payment/:status', component: () => import('pages/admin/payments/List.vue') },

      // EXAMENES
      { path: '/users', component: () => import('pages/admin/users/List.vue') },
      { path: '/users/form', component: () => import('pages/admin/users/Form.vue') },
      { path: '/users/form/:id', component: () => import('pages/admin/users/UpdateForm.vue') },

      { path: '/tests_exams/:id', component: () => import('pages/user/TestsExams.vue') },
      { path: '/test-exam/:id', component: () => import('pages/user/TestExam.vue') },
      { path: '/results/:id', component: () => import('pages/user/Results.vue') },
      { path: '/date_exams_users', component: () => import('pages/user/DateExams.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/registro', component: () => import('pages/Register.vue') },
  {
    path: '/',
    redirect: '/buy_exams'
  },
  {
    path: '*',
    redirect: '/buy_exams'
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
