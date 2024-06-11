<template>
  <div>
    <input type="date" v-model="du" placeholder="Du">
    <input type="date" v-model="au" placeholder="Au">
    <button>Valider</button>
    <br>
    <button @click="$emit('ugara')" >Annuler</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>