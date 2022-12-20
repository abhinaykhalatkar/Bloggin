<template>
  <div class="blogWriting">
    <div class="blogsCreate">
      <BlankBlog @open-create-blog="$emit('open-create-in-blogWriting')" />
      <div class="blogsDraft" v-for="draft in draftBlogs" v-bind:key="draft.id">
        <BlogsTile v-bind:details="draft" />
      </div>
    </div>
    <div class="blogsPublishedcon">
      <h3>Published Blogs</h3>
      <div class="blogsPublished">
        <div class="blogsDraft" v-for="publishedBlog in publishedBlogs" v-bind:key="publishedBlog.id">
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
  emits: ['open-create-in-blogWriting'],
  mounted() {
    if (!this.$store.state.loginDetails.isLoggedIn) {
      this.$router.push('/login')
    }
  },

};
</script>
<style scoped>
.blogWriting {
  margin: 5%;
  text-align: center;
 
  height: 100vh;
}

.blogsPublished {
  margin-top: 10px;
  height: 30vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
.blogsPublishedcon{
  padding: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}


.blogsDrafts {
  height: 40vh;
  padding: 30px;
}

.blogsCreate {
  height: 40vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 30px;
}
</style>
