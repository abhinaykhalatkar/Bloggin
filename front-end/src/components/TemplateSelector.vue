<template>
  <div class="componentHTML">
    <div class="componentBody">
      <Screen1 class="screen1" @template-selection-menu="nextScreen1"  @cancel-template-selection="$emit('cancel-template-selection')"/>
      
      <Screen2 class="screen2" />
      <Screen3 class="screen3"/>
    </div>
  </div>
</template>
<script>

import Screen1 from './TemplateComponents/Screen1.vue'
import Screen2 from './TemplateComponents/Screen2.vue';
import Screen3 from './TemplateComponents/Screen3.vue';

import gsap  from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);
export default {
  name: "TemplateSelector",
  components: {
    Screen1,
    Screen2,
    Screen3

  },
  //add back and next button function
  data() {
    return {
      templateSelector:false,
     

    };
  },
  emits: ['cancel-template-selection'],
  methods:{
    nextScreen1(){
      const start=()=>{
        this.templateSelector=true;
        this.slide('.screen2',true);
      
      }
      this.slide('.screen1',false,start)
    },
    slide(el,val, start=null) {
      gsap.fromTo(
        el,
        { css: { width:`${val?0:'676px'}`} },
        { css: { width:`${val?'676px':0}`, display:`${val?'block':'none'}`}, onComplete: start, duration: 0.2 }
      );
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
