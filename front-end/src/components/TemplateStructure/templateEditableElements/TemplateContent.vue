<template >
<h1 v-if="type=='h1'"  @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</h1>
<h2 v-if="type=='h2'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</h2>
<h3 v-if="type=='h3'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</h3>
<h4 v-if="type=='h4'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</h4>
<h5 v-if="type=='h5'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</h5>
<h6 v-if="type=='h6'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</h6>
<p v-if="type=='p'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</p>
<div v-if="type=='div'" @click="toggleEditor"
:style="{'color':this.textColor,
    'font-size':`${this.fontSize}px`}">{{ this.textContent }}</div>
<SuperEditor @editDetails="emitToParent"
:componentData="{ 
    textContent:this.textContent,
    textColor:this.textColor,
    fontSize:this.fontSize
    }"
@edit-details2=toggleEditor componentType="text"
v-if="this.editorOpen && !this.$store.state.currentDraftDetails.published && this.$store.state.loginDetails.logInId==this.$store.state.currentDraftDetails.userId"
/>
  </template>
  <script>
  import SuperEditor from './SuperEditor.vue';
  export default {
  name: "TemplateContent",
  components:{SuperEditor},
  data(){
    return {
        editorOpen:false,
        textContent:this.componentData.textContent,
        textColor:this.componentData.textColor,
        fontSize:this.componentData.fontSize,
    }
  },
  props:{
    componentData:Object,
    type:String
  },
  emits: ['editDetails'],
  methods:{
    emitToParent(el1,el2,el3){
        this.$emit('editDetails',el1,el2,el3);
        console.log(el1,el2,el3)
    }
    ,
    toggleEditor(el,textContent=false,textColor=false,fontSize=false){
        
        let val=textContent || textColor||fontSize
        // if(val){
        //     textContent?this.textContent=textContent:null
        //     textColor?this.textColor=textColor:null
        //     fontSize?this.fontSize=fontSize:null
        // }

        this.editorOpen=!this.editorOpen;


    }
  }
}
  </script>
  <style scoped>
  
  
 
  </style>