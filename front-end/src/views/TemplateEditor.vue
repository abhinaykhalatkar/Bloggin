<template>
    <div class="publishDraftAction">
    <Button @click="publishOrDraft(false)" type="second" text="Drafts"/>
    <Button @click="publishOrDraft(true)" type="first" text="publish"/>
    </div>

<div class="templateSection">
<Template1 v-if="this.$store.state.currentDraftDetails.templateId==1"/>
<Template2 v-if="this.$store.state.currentDraftDetails.templateId==2"/>
<Template3 v-if="this.$store.state.currentDraftDetails.templateId==3"/>
<Template4 v-if="this.$store.state.currentDraftDetails.templateId==4"/>
</div>
</template>
<script>
import Button from '@/components/Button.vue';
import Template1 from '@/components/TemplateStructure/Template1.vue';
import Template2 from '@/components/TemplateStructure/Template2.vue';
import Template3 from '@/components/TemplateStructure/Template3.vue';
import Template4 from '@/components/TemplateStructure/Template4.vue';

export default {
  name: "templateEditorView",
  data(){
    return{
        template:1
    }
  },
  components:{Button,Template1,Template2,Template3,Template4
},
  methods:{

    async publishOrDraft(val){
        val?this.$store.commit('changeDraftDetails',["published",val]):null
        const res = await fetch(`http://localhost:5001/blogs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.$store.state.currentDraftDetails),
      });
      const data = await res.json();

    }
  },
  mounted(){
    this.template=this.$store.state.currentDraftDetails.templateId
  }
}

</script>
<style></style>