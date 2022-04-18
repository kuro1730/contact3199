<template>
	<Header />
	<section class="ui padded segment">
		<div class="ui teal segment">
			<div class="left aligned floating ui large teal ribbon label">
				<h3>Contacts</h3>
			</div>
			<div class="ui grid">
				<div class="one wide column"></div>
				<div class="fifteen wide column">
					<div class="ui fluid action input">
						<input type="text" placeholder="Search..." v-model="search" />
						<div class="ui button">Search</div>
						<router-link to="/newcontact">
							<button class="ui orange button">
								<i class="plus icon"></i>
								Add
							</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="ui padded segment">
			<div class="ui four cards">
				<div class="card" v-for="c in filterContacts">
					<div class="image">
						<img :src="c.imageUrl" />
					</div>
					<div class="content">
						<div class="header">{{ c.firstname }} {{ c.lastname }}</div>
						<div class="description">
							<span class="ui grey text">
								<p>Mobile: {{ c.mobile }}</p>
								<p>Email: {{ c.email }}</p>
								<p>Facebook: {{ c.facebook }}</p>
							</span>
						</div>
					</div>
					<div class="extra content">
						<router-link
							:to="{
								path: '/editcontact',
								name: 'EditContact',
								params: { id: c._id }
							}"
						>
							<button class="ui blue icon button">
								<i class="edit icon"></i>
							</button>
						</router-link>

						<button class="ui red icon button" @click="DELETE(c._id)">
							<i class="eraser icon"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
	name: 'ContactList',
	components: {
		Header
	},
	data() {
		return {
			search: '',
			contacts: []
		}
	},
	methods: {
		DELETE(_id) {
			axios
				.delete('https://contact3203.herokuapp.com/contact/' + _id)
				.then(res => {
					console.log(res)
					this.fetch()
				})
				.catch(err => {
					console.log(err)
				})
			
		},
		fetch(){
		axios
			.get('https://contact3203.herokuapp.com/contacts/')
			.then(res => {
				console.log(res.data)
				this.contacts = res.data
			})
			.catch(err => {
				console.log(err)
			})
		}
	},
	computed: {
		filterContacts() {
			return this.contacts.filter(c => {
				c.fullname = `${c.firstname} ${c.lastname}`
				return c.fullname.toLowerCase().includes(this.search.toLowerCase())
			})
		}
	},
	mounted() {
		axios
			.get('https://contact3203.herokuapp.com/contacts/')
			.then(res => {
				console.log(res.data)
				this.contacts = res.data
			})
			.catch(err => {
				console.log(err)
			})
	}
}
</script>

<style></style>
