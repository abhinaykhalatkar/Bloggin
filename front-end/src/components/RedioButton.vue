<template>
  <div class="container">
    <p>{{leftText}} </p>
    <label  class="switch"><input type="checkbox" @click="runThis"/>    <div></div>
    </label>
    <p>{{rightText}}</p>
  </div>
</template>
<script>
export default{
    name:'RedioButton',
    data(){
       return{
        isOn:false
       }
    },
    props:{
        leftText:String,
        rightText:String,
    },
    emits:['redio-switched'],
    methods:{
        runThis(){
            this.isOn=!this.isOn
            this.$emit('redio-switched',this.isOn)
        }
    }
}

</script>
<style scoped>
p{
  margin: 0 10px 0 10px ;
}
.container {

  height: 40px;
  display: inline-flex;
}

/** Switch
 -------------------------------------*/

.switch input {
  position: fixed;

  opacity: 0;
  
}

/**
 * 1. Adjust this to size
 */

.switch {
  display: inline-block;
  font-size: 20px; /* 1 */
  height: 1em;
  width: 2em;
  background: #2250e7;
  border-radius: 1em;
}

.switch div {
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #FFF;
  box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3);
  -webkit-transition: all 300ms;
     -moz-transition: all 300ms;
          transition: all 300ms;
}

.switch input:checked + div {
  -webkit-transform: translate3d(100%, 0, 0);
     -moz-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
}

</style>