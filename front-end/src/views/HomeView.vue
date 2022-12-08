<template>
  <!-- header -->
  <div class="header-container">
    <div class="header">
      <div class="headerName">Blog</div>
    </div>
    <div class="search stack-top">
      <input v-model="message" placeholder="Search" style="margin-top: 180px;" />
    </div>
    <!-- <TrendingBlogList /> -->
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
</template>

<script>
// import TrendingBlogList from '../components/TrendingBlogList.vue'
// export default {
//   name: 'HomeView',
//   components: {
//     TrendingBlogList,
//   },
// };
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  margin-top: 5%;
}

.header {
  width: 80%;
  height: 180px;
  border-radius: 15px;
  background-image: linear-gradient(90deg, #9BAFD9, #103783);
}

.headerName {
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: white;
  margin-top: 60px;
  font-size: 30px;
  font-weight: bolder;
}

.search {
  position: absolute;
}

.stack-top {
  z-index: 0;
  margin: 20px;
}

.category-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
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