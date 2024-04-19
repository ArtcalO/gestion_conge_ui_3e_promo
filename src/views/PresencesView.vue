<template>
    <section class="wrapper">
        <div class="separator">
            <!-- <div></div> -->
            <strong>Liste des presences</strong>

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
                            <th>Salaire</th>
                            <th>Present </th>
                            <th>Created at</th>
                            <th>Personne</th>
                            <th>Created by</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="presence in presences">
                          <td>{{ presence.id }}</td>
                          <td>{{ presence.salaire }}</td>
                          <td>{{ presence.present }}</td>
                          <td>{{ presence.created_at }}</td>
                          <td>{{ getPersonneFullname(presence.personne) }}</td>
                          <td>{{ presence.created_by }}</td>
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
            presences:[]
        }
    },
    mounted(){
        this.fetchPresences()
    },
    computed:{
        headers(){
            return {
                headers:{
                "Authorization":"Bearer "+this.$store.state.user.access,
                }
            }
        }
    },
    methods:{
        getPersonneFullname(personne){
            return `${personne.nom} ${personne.prenom}`
        },
        fetchPresences(){
            let header = `Bearer ${this.$store.state.user.access}`
            console.log(header)
            axios.get("/presences/", this.headers)
            .then((response)=>{
                this.presences = response.data.results
                console.log(this.presences)
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
