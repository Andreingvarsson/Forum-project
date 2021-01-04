<template>
  <div id="app">
    <NavBar />
    <ForumList/>
          <div id="nav">
      <!-- <router-link to="/worldofwarcraft">World of Warcraft</router-link> |
      <router-link to="/counterstrike">Counter Strike</router-link> |
      <router-link to="/leagueoflegends">League of Legends</router-link> | -->
 
      <!-- move into its own component forumpagelist -->
      <!-- V-for from database instead and only use one routerlink.-->
    </div>
    
    <router-view/>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";


//import ForumPageList from "./components/ForumPageList.vue";
import NavBar from '../src/components/NavBar'
import ForumList from '../src/components/ForumList'
@Component({
 components: {
    NavBar,
    ForumList
  }
})

 
class App extends Vue {

  created(){
    this.$store.dispatch("fetchAllForums");
   
  }

}

export default App;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
