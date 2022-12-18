<template>
  <div class="blogWriting">
    <div class="blogsCreate">
      <BlankBlog @open-create-blog="$emit('open-create-in-blogWriting')"/>
      <div class="blogsDraft" v-for="draft in draftBlogs" v-bind:key="draft.id">
        <BlogsTile v-bind:details="draft" />
      </div>
    </div>
    <div class="blogsPublished">
      <h3>Published Blogs</h3>
        <div class="blogsDrafts">
          <div
        class="blogsDraft"
        v-for="publishedBlog in publishedBlogs"
        v-bind:key="publishedBlog.id"
      >
        <BlogsTile v-bind:details="publishedBlog" />
      </div>
        </div>
    </div>
  </div>
</template>
<script>

import BlogsTile from "@/components/BlogsTile.vue";
import BlankBlog from "@/components/BlankBlog.vue";
export default {
  name: "BlogWritingView",
  components: {
    BlankBlog,
    BlogsTile,
  },
  data() {
    return { 
      draftBlogs: [
        { taskId: 1, name: "Black Holes and Gravity" },
        { taskId: 2, name: "Hawkings rediations" },
        { taskId: 3, name: "Dark Matter" },
      ],
      publishedBlogs: [
        { taskId: 1, name: "PUBLISHED1" },
        { taskId: 2, name: "PUBLISHED2" },
        { taskId: 3, name: "PUBLISHED3" },
      ],
    };
  },
  props: {},
  methods: {},
  emits:['open-create-in-blogWriting'],
 

};
</script>
<style scoped>
.blogWriting{
  text-align:center
}
.blogsPublished{
  
background-color: white;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

}
.blogsCreate,
.blogsDrafts {
  display: flex;
  gap: 20px;
  padding: 30px;
}
.blogsCreate{
  display: grid;

  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 30px;
}

</style>
