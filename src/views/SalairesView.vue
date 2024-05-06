<template>
    <section class="wrapper">
        <div class="separator">
            <div @click="$store.state.user=null">Logout</div>
            <strong>Liste des utilisateur</strong>

            <div class="interaction">
                <div class="search-filter">
                    <div class="search-items">
                        <input
                            type="search"
                            placeholder="Chercher..."
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-wrap-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Montant</th>
                            <th>Created at</th>
                            <th>personne</th>
                            <th>Created by</th>
                            <th>Ikindi kintu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="salaire in salaires">
                          <td>{{ salaire.id }}</td>
                          <td>{{ salaire.montant }}</td>
                          <td>{{ salaire.created_at }}</td>
                          <td>{{ getPersonneFullname(salaire.personne) }}</td>
                          <td>{{ salaire.created_by }}</td>
                          <td>{{ salaire['ikindi kintu'] }}</td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
        </div>
        
    </section>
</template>
<script>
export default {
    data(){
        return{
            salaires:[]
        }
    },
    mounted(){
        this.fetchSalaires()
    },
    computed:{
        headers(){
            return {
                headers:{
                    "Authorization":"Bearer "+this.$store.state.user.access
                }
            }
        }
    }, 
    methods:{
        getPersonneFullname(personne){
            return `${personne.nom} ${personne.prenom}`
        },
        fetchSalaires(){
            axios.get("/salaire/")
            .then((response)=>{
                this.salaires = response.data.results
                console.log(this.salaires)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.en_conge{
    background-color:orange;
}
</style>
