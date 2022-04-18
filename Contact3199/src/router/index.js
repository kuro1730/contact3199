import { createRouter, createWebHistory } from 'vue-router'

import ContactList from '../views/ContactList.vue'
import Login from '../views/Login.vue'
import NewContact from '../views/NewContact.vue'
import EditContact from '../views/EditContact.vue'

const routerHistory = createWebHistory()

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/login'
	},
	{
		path: '/contactlist',
		name: 'ContactList',
		component: ContactList
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/newcontact',
		name: 'NewContact',
		component: NewContact
	},
	{
		path: '/editcontact/:id',
		name: 'EditContact',
		component: EditContact
	}
]

const router = createRouter({
	history: routerHistory,
	routes
})
export default router
