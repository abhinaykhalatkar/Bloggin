<template>
<div class="slider-ctr">
    <RedioButton  class="redioBtn" leftText="free" rightText="paid" @redio-switched="emitFreePaid"/>
    <RedioButton  class="redioBtn" leftText="For All" rightText="Selected User" @redio-switched="toggleAddUser"/>
    <WhiteListBlock v-if="this.whiteListOn" @update-white-list="updateWhiteList"/>
    
    <div class="buttonDiv">
    
  <Button @click="back"	type='second' text="Back"/>
  <Button @click="createProject" style="margin-left: 410px" type='first' text="Done"/>
  </div>
</div>
</template>
<script>
import RedioButton from '../RedioButton.vue';
import Button from '../Button.vue';
import WhiteListBlock from './WhiteListBlock.vue';
import gsap  from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);
export default{
name:'screen3',
data(){
return {
    isPaid:false,
    whiteListOn:false,
    privacy:false
}
},
components: {
    RedioButton,
    Button,WhiteListBlock
  },
  methods:{
    updateWhiteList(list){
        list.length>1?this.privacy=true:this.privacy=false;
    },
    createProject(){
        
    },
    emitFreePaid(val){
        this.isPaid=!this.isPaid;
        console.log(val)
    this.$emit('isPaid',val)

    },
toggleAddUser(val){
    this.whiteListOn=!this.whiteListOn;
    console.log(this.whiteListOn)
    this.$emit('whitelistOn',val)
},
back(){
      const done=()=>{this.slide('.screen2',true);}
      this.slide('.screen3',false,done);
      gsap.fromTo(
        '.screenTitle',
        { css: {display:'none'} },
        { css: {display:'block'}, duration: 0.2 }
      );
    },
slide(el,val, start=null) {
      gsap.fromTo(
        el,
        { css: { width:`${val?0:'676px'}`} },
        { css: { width:`${val?'676px':0}`, display:`${val?'block':'none'}`}, onComplete: start, duration: 0.2 }
      );
    },
  }

}
</script>
<style scoped>
.buttonDiv{
    position: inherit;
    top: 86%;
}
.slider-ctr { 
    background-color: azure;
 width: 0;
  /* width: 676px; */
  height: 700px;
  position: absolute;
  top: 33%;
  left: 50%;
  margin-top: -220px;
  margin-left: -350px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>