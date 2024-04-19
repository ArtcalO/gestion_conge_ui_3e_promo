<template>
    <section class="wrapper">
        <div class="separator">
            <!-- <div></div> -->
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
                <div>
                    <button class="btn btn-add" @click="openModal">
                        <i class="mdi mdi-plus"></i>
                        Ajouter Employé
                    </button>
                </div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-wrap-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Age</th>
                            <th>Genre</th>
                            <th>Status</th>
                            <th>Jours restant</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="employe,i in listeEmployes"
                            :key="employe.id"
                            :class="{en_conge:enConge(employe)}"
                            >
                            <td>{{employe.nom}}</td>
                            <td>{{employe.prenom}}</td>
                            <td>{{employe.age}}</td>
                            <td>{{employe.genre}}</td>
                            <td>{{checkStatus(employe)}}</td>
                            <td>{{enConge(employe)?remainingDays(employe.conge_fin)+' Jour(s)':"0 Jour"}}</td>
                            <td class="act">
                                <button
                                    v-if="checkConge(employe)"
                                    @click="openAddConge(i)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Ajouter Congé
                                </button>
                                <button
                                    @click="modifierEmploye(employe,i)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Modifier
                                </button>
                                <button
                                    class="btn-sm btn-danger"
                                >
                                    <i class="mdi mdi-delete"></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
        </div>
        <ModalAddEmploye 
            v-if="add_employe_shown"
            @close="close"
            @addEmploye="addEmploye"
        ></ModalAddEmploye>
        <AddConge v-if="add_conge_shown" @close="close" @addCongeEmitted="addConge"/>
        <ModifierEmploye v-if="edit_employe_shown" @close="close" :employeProp="employeObj" />
    </section>
</template>
<script>
import ModalAddEmploye from "../components/dialog_add_employe.vue"
import AddConge from "../components/dialog_add_conge.vue"
import ModifierEmploye from "../components/modal_edit_employe.vue"
import axios from "axios"
export default {
    components:{ModalAddEmploye,AddConge,ModifierEmploye},
    mounted(){
        this.getIbisokozo()
    },
    data(){
        return{
            add_employe_shown:false,
            add_conge_shown:false,
            edit_employe_shown:false,
            retrieved_index:null,
            employeObj:{},
            listIbisokozo:[],
            listeEmployes:[
                {
                    id:1,
                    nom:"Artcal'O",
                    prenom:"Lone Wolf",
                    age:45,
                    genre:"F",
                    conge_debut:null,
                    conge_fin:null
                },
                {
                    id:2,
                    nom:"TLW",
                    prenom:"Wolverine",
                    age:45,
                    genre:"F",
                    conge_debut:null,
                    conge_fin:null
                },
            ],
            colors:[
                {color:"Orange"},
                {color:"Blue"},
                {color:"Magnenta"},
                {color:"Indigo"},
                {color:"Black"}
            ]
        }
    },
    methods:{
        openModal(){
            this.add_employe_shown=true
        },
        close(){
            this.add_employe_shown=false
            this.add_conge_shown=false
            this.edit_employe_shown=false
        },
        addEmploye(data){
            this.close()
            this.listeEmployes.push(data)
        },
        checkConge(employe){
            return employe.conge_debut == null && employe.conge_fin==null
        },
        openAddConge(indice){
            this.retrieved_index=indice
            this.add_conge_shown=true
        },
        addConge(debut, fin){
            this.listeEmployes[this.retrieved_index].conge_debut=debut
            this.listeEmployes[this.retrieved_index].conge_fin=fin
            this.close()
        },
        enConge(employe){
            let today = new Date()
            let debut = new Date(employe.conge_debut)
            let fin = new Date(employe.conge_fin)
            return debut <= today && fin >= today
        },
        remainingDays(fin){
            let today=new Date()
            fin=new Date(fin)
            return Math.ceil(((((fin-today)/1000)/3600)/24))
        },
        checkStatus(employe){
            let today = new Date()
            let debut = new Date(employe.conge_debut)
            if(this.enConge(employe))
                return "En congé"
            if(debut>today)
                return "Congé programmé en date du"+employe.conge_debut
            return "Pas en congé"            
        },
        modifierEmploye(employe, indice){
            this.retrieved_index=indice
            this.employeObj=employe
            this.edit_employe_shown=true
        },
        getIbisokozo(){
            let url = "http://127.0.0.1:8000/rest_api/ibisokozo/"
            axios.get(url)
            .then((response)=>{
                this.listIbisokozo=response.data
            }).catch((error)=>{

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
