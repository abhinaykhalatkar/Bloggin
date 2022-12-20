<template>
    <div class="blankBlog" @click="$emit('open-create-blog')">
        <img src="https://thumbs.dreamstime.com/b/writing-memo-line-icon-writing-memo-line-icon-edit-document-file-linear-style-sign-mobile-concept-web-design-paper-pen-166163490.jpg" alt="">
        <p>New Project</p>
    </div>
  </template>
  <script>
  export default {
  name: "BlankBlog",
  emits:['open-create-blog']
}
  </script>
  <style scoped>
  .blankBlog{
    border-radius: 5px;
    margin-right: 20px;
    height: 200px;
    width: 200px;
   
    background-color: #ffffff;
    transition: all .2s ease-in-out;
  }
  .blankBlog:hover{
    transform: scale(1.1);
  }
  p{
    color: black;
    font-weight: bold;
  }
  img{
    margin-top: 5px;
    height:70%;
    width: 70%;
    background-color: brown;
    border-radius: 10px;
  }
  </style>