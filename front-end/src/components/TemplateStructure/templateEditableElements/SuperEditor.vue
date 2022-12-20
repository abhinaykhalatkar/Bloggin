<template >
    <div class="superEditor">
        <div  v-if="componentType=='img'">
            <label for="imgLink">Enter Image Link</label>
            <input v-model="this.imageLink" type="text" name="imgLink"/> 
        </div>
        <div v-if="componentType=='text'">
            <label for="content">Edit Content</label>
            <textarea v-model="this.textContent" name="content"></textarea>
            <label for="color">Select Color (in color code)</label>
            <input v-model="this.textColor" type="text" name="color"/> 
            <label for="size">Font size</label>
            <input v-model="this.fontSize" type="number" name="size"/> 
        </div>
       <button @click="editAndClose"></button> 
    </div>
  </template>
  <script>

  export default {
  name: "SuperEditor",
  data(){
    return {
        imageLink:this.componentData.imgLink?this.componentData.imgLink:null,
        textContent:this.componentData.textContent?this.componentData.textContent:null,
        textColor:this.componentData.textColor?this.componentData.textColor:null,
        fontSize:this.componentData.fontSize?this.componentData.fontSize:null,
    }
  },
  props:{
    componentData:Object,
    componentType:String
  },
  methods:{
    editAndClose(){
        if(this.componentType=='img'){
            this.$emit('editDetails',this.imageLink)
        }
        else if(this.componentType=='text'){
            console.log(this.textContent , this.textColor,this.fontSize)
            this.$store.commit('setDraft4Title',this.textContent)
            
        }
    },
    
  },
  emits: ['editDetails']
}
  </script>
  <style scoped>
  .superEditor{
    background-color: gray;
  }
  
 
  </style>