<template>
    <OverlayView title="Ajouter Congé">
      <div class="form-group">
          <label>Début</label>
          <input type="date" v-model="date_debut" autofocus required />
      </div>
      <div class="form-group">
          <label>Fin</label>
          <input type="date" v-model="date_fin" autofocus required />
      </div>
      <div>
        <input
          class="btn btn-primary"
          @click="enregistrer"
          type="submit"
          value="Ajouter"
        />
      </div>
    </OverlayView>
</template>

<script>
import OverlayView from "./overlay_view.vue"
export default {
  name: 'AddConge',
  components:{
    OverlayView,
  },
  data(){
    return {
      date_debut:null,
      date_fin:null,
    }
  },
  methods: {
    enregistrer() {
      this.$emit("addCongeEmitted", this.date_debut, this.date_fin)
    },
  },

 
};
</script>

<style lang="css" scoped>
</style>
