<template>
  <BackDrop v-if="this.backDropActive" @click="toggleTemplateSelector" />
  <h1>Bloggen</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blogWriting">Write</router-link> |
    <router-link to="/aboutUs">About</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <TemplateSelector
    v-if="this.templateSelectorOpen"
    @cancel-template-selection="toggleTemplateSelector"
  />
  <router-view @open-create-in-blogWriting="toggleTemplateSelector" />
</template>
<script>
import TemplateSelector from "./components/TemplateSelector.vue";
import BackDrop from "./components/BackDrop.vue";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// import { doesNotMatch } from 'assert';
gsap.registerPlugin(CSSPlugin);
export default {
  components: {
    TemplateSelector,
    BackDrop,
  },
  data() {
    return {
      backDropActive: false,
      templateSelectorOpen: false,
    };
  },
  methods: {
    toggleTemplateSelector() {
      this.templateSelectorOpen
        ? this.slideOut(".componentBody", this.done)
        : (this.templateSelectorOpen = !this.templateSelectorOpen);
      this.backDropActive = !this.backDropActive;
      this.$store.dispatch("setProjectName")
    },
    done() {
      this.templateSelectorOpen = false;
    },
    slideOut(el, done) {
      gsap.fromTo(
        el,
        { css: { left: "50%" } },
        { css: { left: "-50%" }, onComplete: done, duration: 0.3 }
      );
    },
  },
};
</script>

<style lang="scss">
h1 {
  margin-left: 8rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

button {
  padding: 8px;
  margin-left: 20px;
}

nav {
  margin-top: -46px;
  text-align: right;
  margin-right: 10rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
