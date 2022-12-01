import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "HomePage",
        requiresAuth: false,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About",
        requiresAuth: false,
      }
    },
    {
      path: '/academic',
      name: 'academic',
      component: () => import('../views/AcademicView.vue'),
      meta: {
        title: "Academic",
        requiresAuth: false,
      }
    },
    {
      path: '/admission',
      name: 'admission',
      component: () => import('../views/AdmissionView.vue'),
      meta: {
        title: "Admission",
        requiresAuth: false,
      }
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/StudentView.vue'),
      meta: {
        title: "Student",
        requiresAuth: false,
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/TeacherView.vue'),
      meta: {
        title: "Teacher",
        requiresAuth: false,
      }
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: () => import('../views/FacilitiesView.vue'),
      meta: {
        title: "Facilities",
        requiresAuth: false,
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/NoticeView.vue'),
      meta: {
        title: "Notices",
        requiresAuth: false,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: "Contact",
        requiresAuth: false,
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
      meta: {
        title: "Help",
        requiresAuth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "Login",
        requiresAuth: false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "Register",
        requiresAuth: false,
      }
    },
  ],
  linkExactActiveClass: 'LinkActiveClass'
})

router.beforeEach((to, from, next) => {
  document.title = `N.R.K.F Digital School :: ${to.meta.title}`;
  next();
});

export default router
