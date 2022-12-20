<template>
<div class="templateSection">
<NotFound404 v-if="template==0"/>
<Template1 v-if="template==1"/>
<Template2 v-if="template==2"/>
<Template3 v-if="template==3"/>
<Template4 :get-template-details="this.templateDetails" v-if="this.template==4"/>
</div>
</template>
<script>
import NotFound404 from '@/components/TemplateComponents/NotFound404.vue'
import Template1 from '@/components/TemplateStructure/Template1.vue';
import Template2 from '@/components/TemplateStructure/Template2.vue';
import Template3 from '@/components/TemplateStructure/Template3.vue';
import Template4 from '@/components/TemplateStructure/Template4.vue';


export default {
  name: "readBlogView",
  data(){
    return{
        template:0,
        templateDetails:null
    }
  },
  components:{Template1,Template2,Template3,Template4,NotFound404
},
 
  async mounted(){
    console.log(this.$route.params.id)
    const res = await fetch(`http://localhost:5001/blogs?id=${this.$route.params.id}`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      const data = await res.json();
      console.log(data);
      this.template= await data[0].templateId

      this.templateDetails= data[0].templateDetails;
     console.log( this.template,this.templateDetails);
      
  }
}

</script>
<style scoped></style>