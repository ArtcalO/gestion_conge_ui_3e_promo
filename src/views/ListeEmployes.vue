<template>
	<h1>Page Liste Employe</h1>
	<button @click="perfomLogout">LogOut</button>
</template>

<script>
export default {

  name: 'ListeEmployes',

  data() {
    return {

    };
  },
  methods: {
    perfomLogout() {
    	this.$store.state.user=null
      localStorage.removeItem("user")
    },
  },
};
</script>

<style lang="css" scoped>
</style>
