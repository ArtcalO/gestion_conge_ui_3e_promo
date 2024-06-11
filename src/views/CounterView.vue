<template>
  <div class="counter-container">
    <div>
        <ButtonComponent name="Decrement" @eventEmitted="hanlderEventEmitted"/>
    </div>
    <div class="counter">{{ counter }}</div>
    <div>
       <ButtonComponent name="Increment" @eventEmitted="hanlderEventEmitted"/>
    </div>
    
  </div>
</template>

<script>
import ButtonComponent from "@/components/button_component.vue"
export default {
    data(){
        return {
            counter:0,
            Decrement:"HHHHHH"
        }
    },
    components:{ButtonComponent},
    methods:{
        increment(){
            this.counter++
        },
        hanlderEventEmitted(x){
            console.log(x)
            console.log(JSON.stringify(x))
            if(x.name.toLowerCase()=="increment")
                this.counter++
            else
                this.counter--
        },
        decrement(){
            console.log("click")
            this.counter--
        },
        decrementTwice(){
            console.log("db click")
            this.counter = this.counter-2
        }
    }
}
</script>

<style scoped>
.counter-container{
    margin-top: 50%;
    padding-left: 50%;
    display: flex;
    width: 200px;
}
.counter{
    margin: 0 20px 0 20px;
}

</style>