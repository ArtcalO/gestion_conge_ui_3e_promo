<script >
    import LoginView from "./components/LoginView.vue"
    export default{
        components:{LoginView},
        mounted(){
            let user = JSON.parse(localStorage.getItem("user"))
            if(user){
                this.$store.state.user=user
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
