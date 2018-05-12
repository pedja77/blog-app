import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './pages/AppPosts.vue'
import SinglePost from './pages/SinglePost.vue'
import AddPost from './pages/AddPost.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'posts' },
  { path: '/posts/:id', component: SinglePost, name: 'single-post'},
  { path: '/add', component: AddPost, name: 'add'},
  { path: '/edit/:id', component: AddPost, name: 'edit-post'}
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})