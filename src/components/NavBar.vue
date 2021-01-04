<template>
  <div class="navbar">
    <h1>GamingForum</h1>
      <router-link to="/login">Login</router-link> 
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
 class NavBar extends Vue {

}

export default NavBar;
</script>

<style scoped>
.navbar{
   align-items: center;
   background: black;
   height: 4em; 
}
.h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: honeydew;
}

</style>
