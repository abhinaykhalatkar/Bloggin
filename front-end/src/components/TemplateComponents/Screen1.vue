<template>
        <form  @submit="submitName">
        <input
        v-model="name"
          type="text"
          name="name"
          class="question"
          id="nme"
          required
          autocomplete="off"
        />
        <label for="nme"><span>Project name?</span></label>
       <div class="btnDiv">
        <Button v-if="(name!='')" @click=""  type='first' text="Next"/>
        <Button  @click="$emit('cancel-template-selection')" type='second' text="Cancel"/>
       </div>
      </form>
</template>
<script>
import gsap  from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);
import Button from '../Button.vue';
export default {
  name: "Screen1",
  data() {
    return {
      name:''
    };
  },
  components:{
    Button
  },
  methods:{
    submitName(e){
        e.preventDefault()
        this.$store.commit('changeDraftDetails',["projectName",this.name])
        this.$emit('template-selection-menu',e);
        gsap.fromTo(
        '.screenTitle',
        { css: {display:'none'} },
        { css: {display:'block'}, duration: 0.2 }
      );
    }
  },
  emits: ['cancel-template-selection','template-selection-menu']}
  </script>
<style scoped>
form{
  margin: auto;

  margin-top: 20%;
    margin-left: 20%;

}
input,
span,
label,
textarea {
  font-family: "Ubuntu", sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
  
}

textarea:focus,
input:focus {
  outline: 0;
}
/* Question */

input.question,
textarea.question {
  text-transform: capitalize;
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8f8f8f;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #eee;;
    color: #110476;
}

input[type="submit"]:active {
  background: #999;
}

input.question:valid ~ input[type="submit"],
textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ input[type="submit"]{
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>