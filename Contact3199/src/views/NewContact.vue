<template>
	<header>
		<h1 class="ui left aligned header">
			Contact &nbsp;<button class="ui teal button">Add</button>
		</h1>
		<div class="ui divider"></div>
	</header>
	<form class="ui large form">
		<div class="field">
			<label>Contact ID</label>
			<input type="text" v-model="contact.cid" placeholder="Contact ID" />
		</div>
		<div class="field">
			<label>First Name</label>
			<input type="text" v-model="contact.firstname" placeholder="First Name" />
		</div>
		<div class="field">
			<label>Last Name</label>
			<input type="text" v-model="contact.lastname" placeholder="Last Name" />
		</div>
		<div class="field">
			<label>Mobile No</label>
			<input type="text" v-model="contact.mobile" placeholder="Mobile No" />
		</div>
		<div class="field">
			<label>Email</label>
			<input type="text" v-model="contact.email" placeholder="Email" />
		</div>
		<div class="field">
			<label>Facebook</label>
			<input type="text" v-model="contact.facebook" placeholder="Facebook" />
		</div>
		<div class="field">
			<label>Image Url</label>
			<input type="text" v-model="contact.imageUrl" placeholder="Image Url" />
		</div>
		
			<div class="ui buttons">
				<button class="ui blue basic button" @click.prevent="addToAPI">
					<i class="save outline icon"></i>
					Save
				</button>
		<router-link to="/contactlist">
				<button class="ui blue basic button">
					<i class="red times icon"></i>
					Close
				</button>
		</router-link>
			</div>
		
	</form>
</template>

<script>
import axios from 'axios'

export default {
	name: 'NewContact',
	data() {
		return {
			contact: {
				cid: '',
				firstname: '',
				lastname: '',
				mobile: '',
				email: '',
				facebook: '',
				imageUrl: ''
			}
		}
	},
	methods: {
		addToAPI() {
			const newContact = {
				cid: this.contact.cid,
				firstname: this.contact.firstname,
				lastname: this.contact.lastname,
				mobile: this.contact.mobile,
				email: this.contact.email,
				facebook: this.contact.facebook,
				imageUrl: this.contact.imageUrl
			}
			axios
				.post('https://contact3203.herokuapp.com/contacts/', newContact)
				.then(res => {
					this.$router.push("/contactlist")
				})
				.catch(err => consolel.log(err))
		}
	}
}
</script>

<style></style>
