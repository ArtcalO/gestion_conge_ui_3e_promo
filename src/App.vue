<script >
import LoginView from "./components/LoginView.vue"

export default{
    data(){
        return{
            isConnected:false
        }
    },
    components:{LoginView}
}
</script>

<template>
    <router-view v-if="isConnected==true"></router-view>
    <LoginView v-else></LoginView>
</template>

<style src="./styles.css">

</style>
