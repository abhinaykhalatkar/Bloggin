<template>
  <BackDrop v-if="this.backDropActive" @click="toggleTemplateSelector" />
  <div class="app">
    <Navigation/>
  </div>
  <TemplateSelector
    v-if="this.templateSelectorMenuOpen"
    @cancel-template-selection="toggleTemplateSelector"
  />
  <router-view @open-create-in-blogWriting="toggleTemplateSelector" />
  <Footer/>

</template>
<script>
import TemplateSelector from "./components/TemplateSelector.vue";
import BackDrop from "./components/BackDrop.vue";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue"
// import { doesNotMatch } from 'assert';
gsap.registerPlugin(CSSPlugin);
export default {
  components: {
    TemplateSelector,
    BackDrop,
    Navigation,
    Footer
  },
  data() {
    return {
      backDropActive: false,
      templateSelectorMenuOpen: false,
    };
  },
  methods: {
    toggleTemplateSelector() {
      this.templateSelectorMenuOpen
        ? this.slideOut(".componentBody", this.done)
        : this.templateSelectorMenuOpen = !this.templateSelectorMenuOpen;
      this.backDropActive = !this.backDropActive;
      // this.$store.dispatch("setProjectName")
      
    },
    done() {
      this.templateSelectorMenuOpen = false;
      this.$store.commit('clearCurrentDraftState')
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
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Comic+Neue:wght@300;400;700&family=Fredoka&display=swap'); 
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Comfortaa', cursive;
}
.app{
  display: flex;
  flex-direction: column;
  // min-height: 100vh;
}
.container{
  max-width: 1440px;
  margin: 0 auto;
}
.links {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.link-lights {
  color: white;
}
// h1 {
//   margin-left: 8rem;
// }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//   color: #2c3e50;
// }

// button {
//   padding: 8px;
//   margin-left: 20px;
// }

// nav {
//   margin-top: -46px;
//   text-align: right;
//   margin-right: 10rem;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
