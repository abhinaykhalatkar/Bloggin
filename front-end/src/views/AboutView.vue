<template>
  <div class="aboutUs">
    <h1>This is an about page</h1>
  </div>






  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">

        <img src="@/assets/aboutUs/pexels-picography-4458.jpg" alt="Placeholder image" class="aboutUsJumboImage">
        
      </figure>
    </div>
  </div>





  <div class="row mb-2">
    <div class="col-md-6">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">Mahatma-Gandhi</a>
          </h3>
          <div class="mb-1 text-muted">Dec 11</div>
          <p class="card-text mb-auto">“Your beliefs become your thoughts,
            Your thoughts become your words,
            Your words become your actions,
            Your actions become your habits,
            Your habits become your values,
            Your values become your destiny.”</p>
            <div>― Mahatma Gandhi.</div>
        
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]" style="width: 250px; height: 350px;"
          src="@/assets/aboutUs/Mahatma-Gandhi.jpg" data-holder-rendered="true">
      </div>
    </div>


    <div class="col-md-6">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
          </h3>
          <div class="mb-1 text-muted">Dec 11</div>
          <p class="card-text mb-auto">Lorem Ipsum has been the industry's standard dummy text ever since the
            ` 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            li`ke Aldus PageMaker including versions of Lorem Ipsum.</p>
          <a href="#">Continue reading</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]" style="width: 250px; height: 350px;"
          src="@/assets/aboutUs/pexels-canva-studio-3194523.jpg" data-holder-rendered="true">
      </div>
    </div>
  </div>










  <div class="row mb-2">
    <div class="col-md-6">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
          </h3>
          <div class="mb-1 text-muted">Dec 11</div>
          <p class="card-text mb-auto">Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]" style="width: 250px; height: 350px;" src="@/assets/aboutUs/Mahatma-Gandhi.jpg"
          data-holder-rendered="true">
      </div>
    </div>



    <div class="col-md-6">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
          </h3>
          <div class="mb-1 text-muted">Dec 11</div>
          <p class="card-text mb-auto">Lorem Ipsum has been the industry's standard dummy text ever since the
            ` 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            li`ke Aldus PageMaker including versions of Lorem Ipsum.</p>
          <a href="#">Continue reading</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]" style="width: 250px; height: 350px;"
          src="@/assets/aboutUs/pexels-canva-studio-3194523.jpg" data-holder-rendered="true">
      </div>
    </div>

  </div>








</template>



<script>

import Button from "../components/Button.vue";
export default {
  name: "AboutUs",
  components: { Button }
};

</script> 

<style scoped>
.aboutUs {

  width: 100%;
  height: 90px;
  margin-right: 50px;
  font-size: 40px;
  text-align: -webkit-center;

}

.button {
  width: 140px;
  height: 40px;
  margin-right: 30px;
}

.media {
  font-size: 30px;
}

.aboutUsJumboImage{
  width: 100vw;
}

</style>


