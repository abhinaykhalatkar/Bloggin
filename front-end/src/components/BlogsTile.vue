<template>
    <div @click="openBlog(details.published)" class="BlogTile">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wi1IY3dRbfrYI985q6-ACmIwyAbCfODW8w&usqp=CAU' alt="">
        <p>{{details.projectName}}</p>
    </div>
  </template>
  <script>
  export default {
  name: "BlogTile",
  props:{
    details:Object
  },
  methods:{
    openBlog(published){
      if(published){
        this.$router.push(`/readBlogs/${this.details.id}`)
      }
      else if(!published){}
    }
  }
}
  </script>
  <style scoped>
  
  .BlogTile{
    height: 185px;
    width: 185px;
    border-radius: 10px;
    background-color: #ffffff;
    transition: 0.3s;
  }
  .BlogTile:hover{
    transform: scale(1.1);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  p{
    color: black;
    font-weight: bold;
  }
  img{
    margin-top: 5px;
    margin-bottom: 20px;
    height: 80%;
    width: 80%;
    background-color: brown;
    border-radius: 10px;
  }
  </style>