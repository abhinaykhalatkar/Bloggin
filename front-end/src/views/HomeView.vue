<template>
  <!-- header -->
  <div class="header-container">
    <img class="header-img" src="../assets/Logo/Home.png" alt="">
    <div class="search stack-top">
      <Button type='four' text="Write Blog" />
    </div>
    <!-- <BlogList> -->
  </div>

  <!-- Blog Category -->
  <div class="category-container">
    <div class="outer-category">
      <div class="category">All</div>
    </div>
    <div class="outer-category">
      <div class="category">Sports</div>
    </div>
    <div class="outer-category">
      <div class="category">Food </div>
    </div>
    <div class="outer-category">
      <div class="category">Travel</div>
    </div>
    <div class="outer-category">
      <div class="category">Lifestyle</div>
    </div>
    <div class="outer-category">
      <div class="category">Personal</div>
    </div>
  </div>

  <!-- Card Sliders -->
  <div class="card-container">
    <div class="card">
      <img src="../assets/1.png" alt="Avatar">
      <div class="card-info">
        <h4><b>Title</b></h4>
        <p>Description</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/1.png" alt="Avatar">
      <div class="card-info">
        <h4><b>Title</b></h4>
        <p>Description</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/1.png" alt="Avatar">
      <div class="card-info">
        <h4><b>Title</b></h4>
        <p>Description</p>
      </div>
    </div>
  </div>

  <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/aboutUs/Mahatma-Gandhi.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/aboutUs/pexels-picography-4458.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/aboutUs/Mahatma-Gandhi.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->







  
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

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 100px;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  // width: 40%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  width: 50%;
  align-content: center;
  border-radius: 5px 5px 0 0;
}

.card-info {
  padding: 2px 16px;
}

</style>
