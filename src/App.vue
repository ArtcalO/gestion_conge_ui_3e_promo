<script >
    import LoginView from "./components/LoginView.vue"
    export default{
        data(){
            return{
                hello:""
            }
        },
        components:{LoginView},
        methods:{
            handlerLoginEmited(username, password){
                if(this.$store.state.db.username==username && this.$store.state.db.password== password){
                    this.$store.state.user = {
                        "username":username,
                        "password":password
                    }
                    localStorage.setItem("user", JSON.stringify(this.$store.state.user));  
                }
                else{
                    alert("Identifiants incorrects !")
                }
            }
        },
        mounted(){
            let user = JSON.parse(localStorage.getItem("user"))
            if(user){
                this.$store.state.user=user
            }
            
        }
    }
</script>

<template>
    <div >
        <LoginView @loginEmitted="handlerLoginEmited" v-if="$store.state.user == null" ></LoginView>
        <router-view v-else></router-view>
    </div>
</template>

<style src="./styles.css">

</style>
