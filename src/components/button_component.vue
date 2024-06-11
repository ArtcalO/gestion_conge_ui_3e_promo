<template>
  <button @click="rungika">{{ name }}</button>
</template>

<script>
export default {
    props:["name"],
    methods:{
        rungika(){
            this.$emit("eventEmitted", {"id":3,"name":this.name})
        }
    }
}
</script>

<style scoped>
button{
    width: 100px;
    font-size: 15px;
    background-color: blue;
    color: white;
}
</style>