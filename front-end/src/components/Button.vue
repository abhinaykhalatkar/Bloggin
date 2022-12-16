<template>
    <!-- for blue button pass prop 'first'
    for orange button pass prop 'second'
    for white button pass prop 'third' -->
    <button :style="{'--color':`${colorSet}`}">{{text}}</button>
</template>
<script>

import gsap  from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);
export default {
name:'Button',
data() {
    return {
      colorSet:'#110476'
    };
  },
  props: {
  type:String,
   text:String
  },

  mounted(){

    if(this.$props.type=='first'){
        this.colorSet='#110476'
    }else if(this.$props.type=='second'){
        this.colorSet='#EB6440'
    }else if(this.$props.type=='third'){
        this.colorSet='#EFF5F5'
    }else {
        this.colorSet='#110476'
    }
    console.log(this.colorSet)
  
}
}
</script>
<style scoped>
button {
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 15px;
  position: relative;
  text-align: center;
  padding: 0;
  
}

button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

button:hover {
 color: black;
  font-weight: bold;
}

button:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

button:hover::before {
  top: -30px;
  left: -30px;
}
</style>