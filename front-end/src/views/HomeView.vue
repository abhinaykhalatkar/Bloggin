<template>
  <!-- header -->
  <div class="header-container">
    <img class="header-img" src="../assets/Logo/Home.png" alt="">
    <div class="search stack-top">
      <router-link class="link" to="/blogWriting"><Button type='four' text="Write Blog" /></router-link>

    </div>
    <!-- <BlogList> -->
  </div>
  <div class="blog-post">
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index" />
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import BlogPost from '../components/BlogPost.vue';

// import TrendingBlogList from '../components/TrendingBlogList.vue'
export default {
  name: 'HomeView',
  components: {
    Button,
    BlogPost
  },
  data() {
    return {
      sampleBlogPosts: [
        {
          title: "First Blog",
          blogHTML: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          blogCoverPhoto: "First Image",
        },
        {
          title: "Second Blog",
          blogHTML: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          blogCoverPhoto: "Second Image",
        },
        {
          title: "Third Blog",
          blogHTML: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          blogCoverPhoto: "Third Image",
        },
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  margin-top: 4%;

  .header-img {
    width: 90%;
  }

  Button {
    margin-top: 230px;
    width: 200px;
    font-size: large;
    font-weight: bold;
  }

  .search {
    position: absolute;
  }

  .stack-top {
    z-index: 0;
    margin: 20px;
  }
}

.blog-post {
  margin-top: 5%;
}
</style>
