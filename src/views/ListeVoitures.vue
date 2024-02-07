<template>
  <div>
    <table v-if="table">
        <thead>
            <th>Icerekana umuduga</th>
            <th>Marque</th>
            <th>Model</th>
            <th>Ibara</th>
        </thead>
        <tbody>
            <tr v-for="voiture in voitures" :id="voiture.id_voiture" style="makeRed">
                <td>{{voiture.id_voiture }}</td>
                <td>{{mundomeNkuru(voiture.marque)}}</td>
                <td>{{voiture.model.toUpperCase()}}</td>
                <td>{{voiture.couleur}}</td>
            </tr>
        </tbody>
    </table>
    <ol>
        <li v-for="variable in voitures" >
            {{variable.couleur}}
        </li>
    </ol>


    <button class="btn btn-primary" styles="margin-right:10px;" v-if="btn1">Btn1</button>

    <button class="btn btn-primary" styles="margin-right:10px;">Btn2</button>
    <button class="btn btn-primary" styles="margin-right:10px;" @click="hideOpenBtn">Afficher/Cacher BTN1</button>
    <button class="btn btn-primary" styles="margin-right:10px;" @mousedown="table=!table">Afficher/Cacher TABLEAU</button>
    <p>{{ text }}</p>
    <p v-html="text"></p>

  </div>
</template>

<script>
export default {
data(){
    return {
        voitures:[
            {"id_voiture":1,"marque":"Toyota","model":"Probox","couleur":"Violet"},
            {"id_voiture":2,"marque":"Benz","model":"Hilux","couleur":"ubururu"},
        ],
        makeRed:"color:red",
        btn1:true,
        table:true,
        text:"<strong>I'm ArtcalO</strong>"
    }
},
methods:{
    mundomeNkuru(d){
        return d.toUpperCase()
    },
    hideOpenBtn(){
        this.btn1=!this.btn1
    }
}
}
</script>

<style>

</style>