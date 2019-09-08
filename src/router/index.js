import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Member from '@/components/Member/Member.vue'
import Publication from '@/components/Publication/Publication.vue'
import Contact from '@/components/Contact/Contact.vue'
import NotFound from '@/components/NotFound/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/member', component: Member },
  { path: '/publication', component: Publication },
  { path: '/contact', component: Contact },
  { path: '*', component: NotFound }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
