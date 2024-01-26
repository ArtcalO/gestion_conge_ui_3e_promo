<template>
  <div class="container">
    <div class="row">
      <div class="col-3 offset-3">
        <span class="mdi mdi-book-open-variant"></span>
        <h1 class="main-title">GESTION CONGE</h1>
      </div>
      <div class="col-9 offset-9">
        <div class="content">
          <div>
            <h1 class="title">Se Connecter</h1>
            <div class="form-group">
              <label for="username">Nom d'utilisateur</label>
              <input
                type="text"
                v-model="username"
                placeholder="Nom d'utilisateur"
                id="username"
                autofocus
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Mot de Passe</label>
              <input
                type="password"
                v-model="password"
                placeholder="Mot de Passe"
                id="password"
                required
              />
            </div>
            <div class="split">
              <button
                class="btn btn-primary"
                @click="PerformLogin"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Connexion",
  data() {
    return {
      login: false,
      username: "",
      password: "",
      user: {"username":"ArtcalO","password":"TLW"},
    };
  },
  methods:{
    PerformLogin(){
      console.log(this.username)
      console.log(this.password)
      if(this.username==this.user.username && this.password == this.user.password){
        alert("Connected")
        this.login=true
      }else{
        alert("Identifiants incorrects !")
      }
    }
  },
  mounted() {
    console.log("Le composant est monté")
  },
};
</script>

<style scoped>
.row {
  display: flex;
}
.row > div {
  min-height: 100vh;
}
.col-3 {
  width: 25%;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.col-3 .mdi {
  font-size: 6em;
  color: var(--color-white);
}
.col-3 .main-title {
  color: var(--color-white);
  font-size: 2.5rem;
  text-transform: uppercase;
}
.col-9 {
  flex: 1 1;
  background: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-9 .content {
  background: var(--color-white);
  padding: 3em;
  width: 26em;
  box-shadow: 0px 0px 15px 5px var(--color-grey),
    0 20px 20px var(--color-grey);
}
.col-9 .content .title {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1.3em;
}
.col-9 .content .form-group,
.col-9 .content .form-check {
  margin-bottom: 1.5em;
}
.split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
small {
  cursor: pointer;
}

@media (max-width: 40em) {
  .col-3 {
    display: none;
  }
  .col-9 .content {
    width: 23em;
  }
}
</style>