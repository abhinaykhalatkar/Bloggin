<template>
<div class="templateSection">

<Template1  :get-template-details="this.templateDetails" v-if="template==1"/>
<Template2  :get-template-details="this.templateDetails" v-if="template==2"/>
<Template3 :get-template-details="this.templateDetails" v-if="template==3"/>
<Template4 :get-template-details="this.templateDetails" v-if="this.template==4"/>
<NotFound404 v-if="template==0"/>
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
        template:null,
        templateDetails:null
    }
  },
  components:{Template1,Template2,Template3,Template4,NotFound404
},
 
  async mounted(){
    console.log(this.$route.params.id)
    const res = await fetch(`http://localhost:5001/blogs?id=${this.$route.params.id}&published=true`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      const data = await res.json();
      console.log(data)
      if(data.length<1){
        this.template=0;
      }
      else if(res.status==200){
        this.template=data[0].templateId
        this.templateDetails= data[0].templateDetails;

      }else {
        this.template=0;
      }
     
      
  }
}

</script>
<style scoped></style>