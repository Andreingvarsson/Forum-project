<template>
  <div class="navbar">
    <h1 @click="goHome">GamingForum</h1>
    <router-link v-if="!user" to="/login">Login</router-link>
    <div v-if="user" @click="logoutUser">Logout</div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
class NavBar extends Vue {
  goHome() {
    this.$router.push({ path: "/" });
  }
  get user() {
    return this.$store.state.loggedInUser;
  }

  async logoutUser() {
    fetch("/auth/logout", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          this.$store.commit("setLoggedInUser", null);
          if (this.$route.path === "/") return;
          this.$router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default NavBar;
</script>

<style scoped>
.navbar {
  align-items: center;
  background: black;
  height: 4em;
}
.h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
