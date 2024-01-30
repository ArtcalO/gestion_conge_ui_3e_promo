<template>
	<div>
		<label>Username</label>
		<input
			type="text"
			name=""
			placeholder="Username here"
			v-model="username"
		>
		<label>Password</label>
		<input
			type="Password"
			name=""
			placeholder="passcode here"
			v-model="password"
		>
		<button @click="perfomLogin">Connexion</button>
	</div>
</template>

<script>
export default {

  name: 'LoginView',

  data() {
    return {
    	username:"",
    	password:"",
    	pass:"",
    };
  },
  methods:{
  	perfomLogin(){

  		this.$emit("loginEmitted", this.username, this.password)
  	},
  	mounted(){
  		console.log("LoginView mounted")
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
