<template>
	<div>
			<input
				type="number"
				placeholder="x"
				v-model="a" 
			>
			<input
				type="number"
				placeholder="x"
				v-model="b" 
			>
			<p>Affichage de la variable dans data {{ a+b }}</p>
			<button type="submit" @click="calculer">Calculer</button>
	</div>
</template>

<script >
	export default{
		data(){
			return{
				a:0,b:0
			}
		},
		methods:{
			jhjhjhjh(){
				alert("cliked")
			}
		}
	}
</script>

<style scoped>
</style>