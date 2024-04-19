<script >
    import LoginView from "./components/LoginView.vue"
    export default{
        components:{LoginView},
        watch: {
			"$store.state.user":{
				deep:true,
				handler(new_val){
				if(!!new_val){
					localStorage.setItem('user', JSON.stringify(new_val));
				} else {
					localStorage.removeItem('user')
				}
				}
			},
		},
		mounted(){
			var user = JSON.parse(localStorage.getItem('user'));
			if(user) {
				this.$store.state.user = user;
			}
		}
   }
</script>

<template>
    <router-view v-if="$store.state.user!=null" ></router-view>
    <LoginView v-else ></LoginView>
</template>

<style>

</style>
