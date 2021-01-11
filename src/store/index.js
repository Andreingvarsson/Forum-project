import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInUser: null,
    forum: null,
    forums: null,
    thread: null,
    threads: null,
  },
  mutations: {
    setForums(state, data) {
      state.forums = data;
    },
    setForum(state, data) {
      state.forum = data;
    },
    createNewThread(state, data) {
      state.forum.threads.push(data);
    },
    setThreads(state, data) {
      state.thread = data;
    },
    setThread(state, data) {
      state.thread = data;
    },
    setLoggedInUser(state, data) {
      state.loggedInUser = data;
    },
  },
  actions: {
    async fetchAllForums({ commit }) {
      console.log("Inne i fetchAllForums");
      const forumResult = await fetch("/api/v1/forums");
      const forums = await forumResult.json();
      console.log(forums, "Alla forums");
      commit("setForums", forums);
    },

    async fetchForumById({ commit }, id) {
      console.log("inne i BYID");
      const forumResult = await fetch(`/api/v1/forums/${id}`);
      const forum = await forumResult.json();
      console.log(forum, "ett forum");
      commit("setForum", forum);
    },

    async whoami({ commit }) {
      let user = await fetch("/auth/whoami");
      try {
        user = await user.json();
        console.log(user);
        commit("setLoggedInUser", user);
      } catch {
        console.log("Not authenticated");
      }
    },
  },
  modules: {},
});
