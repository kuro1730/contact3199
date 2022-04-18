<template>
	<Header />
	<section>
		<div class="ui padded segment">
			<div class="ui teal very padded segment">
				<div class="left aligned floating ui large teal ribbon label">
					<h3>Login</h3>
				</div>
			</div>
			<div class="ui large form" >
				<div class="field">
					<label>User Account</label>
					<input type="text" placeholder="User Account" v-model="username" />
				</div>
				<div class="field">
					<label>Password</label>
					<input type="password" placeholder="Password" v-model="password" />
				</div>
				<button class="ui left button" @click.prevent="matching" >Login</button>
			</div>
		</div>
	</section>
</template>

<script>
import Header from '../components/Header.vue'

export default {
	Name: 'Login',
	components: {
		Header
	},
	data() {
		return {
			username: '',
			password: '',
			Username: 'bob',
			Password: '1234'
		}
	},
	methods: {
		matching() {
			if (this.username == this.Username && this.password == this.Password) {
				this.$router.replace('/contactlist')
			}
			
			
		}
	}
}
</script>

<style scoped>
section {
	width: 35%;
	margin: auto;
}
</style>
