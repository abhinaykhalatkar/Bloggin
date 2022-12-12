<template>
  <div class="componentHTML">
    <div class="componentBody">
      <Screen1 v-if="false" @cancel-template-selection="$emit('cancel-template-selection')"/>
      <Screen2/>
    </div>
  </div>
</template>
<script>


import gsap  from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import Screen1 from './TemplateComponents/Screen1.vue'
import Screen2 from './TemplateComponents/Screen2.vue';
gsap.registerPlugin(CSSPlugin);
export default {
  name: "TemplateSelector",
  components: {
    Screen1,
    Screen2
  },
  emits: ['cancel-template-selection'],
  methods:{
    submitName(e){
        e.preventDefault();
        console.log('blog name submitted')
    },
    slideIn(el){
        gsap.fromTo(el,
        {css:{left:'-50%'}},
        {css:{left:'50%'},
        duration:0.3});
      },
  },
  mounted() {
  console.log('mounted')
  this.slideIn('.componentBody');
  },
};
</script> 

<style scoped>
.componentHTML {
  font-family: "Lora", sans-serif;
  width: 100%;
}
.componentBody {
  z-index: 2;
  position: fixed;
  margin: 5% auto 0 auto;
  width: 90%;
  height: 80%;
  left: 50%;
  top: 45%;
  max-width: 1125px;
  transform: translate(-50%, -50%);
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 3px #2d2d2d6f;
  padding-left: 10%;
  padding-top: 15%;

}


</style>
