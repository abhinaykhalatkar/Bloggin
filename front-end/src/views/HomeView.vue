<template>
  <!-- header -->
  <div class="header-container">
    <img class="header-img" src="../assets/Logo/Home.png" alt="">
    <div class="search stack-top">
      <router-link class="link" to="/blogWriting"><Button type='four' text="Write Blog" /></router-link>
    </div>
  </div>

  <div class="category-container">
    <div class="outer-category" id="foo" v-on:click="select($event)">
      <div class="category">All</div>
    </div>
    <div class="outer-category" id="Hello" v-on:click="select($event)">
      <div class="category">Sports</div>
    </div>
    <div class="outer-category" id="hi" v-on:click="select($event)">
      <div class="category">Food </div>
    </div>
    <div class="outer-category" id="bye" v-on:click="select($event)">
      <div class="category">Travel</div>
    </div>
    <div class="outer-category" id="halo" v-on:click="select($event)">
      <div class="category">Lifestyle</div>
    </div>
    <div class="outer-category" id="hola" v-on:click="select($event)">
      <div class="category">Personal</div>
    </div>
  </div>
  <!-- <BlogList> -->
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
  methods: {
    select: function (event) {
      const targetId = event.currentTarget.id;
      console.log(targetId); // returns 'foo'
    }
  },
  components: {
    Button,
    BlogPost
  },
  data() {
    return {
      sampleBlogPosts: [
        {
          title: "First Blog",
          blogHTML: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    margin-top: 250px;
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

.category-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 70px;
}

.outer-category {
  box-shadow: 1px 1px 3px #888888;
  border-radius: 5px;
  width: 10%;
  margin: 14px;
  cursor: pointer;
}

.category {
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
}

// .blog-post {
//   // margin-top: 5%;
// }
</style>
