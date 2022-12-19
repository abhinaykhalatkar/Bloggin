<template>
  <div class="heading">
    <h1> {{ this.templateDetails.titleText }}</h1>

    <div class="mb-1 text-muted dateposted">{{ this.templateDetails.date }}</div>
    <br/>
    <p class="card-text mb-6">{{ this.templateDetails.heading }}</p>
  </div>


  <div class="slider">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class=""></li>
        <li data-target="#myCarousel" data-slide-to="1" class=""></li>
        <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img class="first-slide" :src="this.templateDetails.imageLink2" alt="First slide">
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>{{ this.templateDetails.heading1 }}</h1>
              <p>{{ this.templateDetails.heading2 }}</p>
              <p><a class="btn btn-lg btn-primary" role="button">{{ this.templateDetails.button }}</a></p>
            </div>
          </div>
        </div>
      
        <div class="carousel-item active">
          <img class="third-slide" :src="this.templateDetails.imageLink" alt="Third slide">
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>{{ this.templateDetails.heading3 }}</h1>
             
              <p><a class="btn btn-lg btn-primary" role="button">{{ this.templateDetails.button2 }}</a></p>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          
     
  

  <div class="bodyparagraph">{{ this.templateDetails.heading4 }}</div>



<div>

  <img class="template3" :src="this.templateDetails.imageLink3" alt="Placeholder image">
</div>


<div class="end"> {{ this.templateDetails.heading5 }}
<div>  <br/>{{ this.templateDetails.author }}  </div>
  </div>



</template>
<script>
export default {
  name: "template 3",
  components: {},
  data(){
    return {
      templateDetails:{
        titleText: 'I like to reinvent myself',
        date:'Posted On July 31,2022',
        heading:'In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below.',
        imageLink:'@/assets/Screen2Assets/Technology1.jpg',
     imageLink2:'@/assets/Screen2Assets/Template1.jpg',
     heading1:'Example headline.',
     heading2:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit',
button:'Sign up today',
heading3:'One more for good measure',
     button2:'Read More',
heading4:'I still keep in mind a certain wonderful sunset which I witnessed when and steamboating was new to me. A broad expanse of the river was turned too blood in the middle distance the red hue brightened into gold, through which a solitary log came floating, black and conspicuous in one place a long calm slanting mark lay sparkling upon the water in another the surface was broken by boiling, tumbling rings, that were as many-tinted as an opal where the ruddy flush was faintest, was a smooth spot that was covered with graceful circles and radiating lines. Ever so delicately traced the shore on our left was densely wooded, and the som ber shadow that fell from this forest was broken in one place by a long, ruffled trail that shone like silver and high above the forest wall. There were graceful curves, reflected images, woody on the heights, soft distances and over the whole scene far and so near, the dissolving lights drifted steadily now dissolving lights. But as I have said, a day came when I began to cease from noting the glories and the charms which the moon and the sun and the twilight wrought upon the river’s face another day came when I ceased altogether to note them. Then, if that sunset scene had been repeated, I should have looked upon it without rapture, and should have commented upon it, inwardly, after this fashion. But as I have said, a day came when I began to cease from noting the glories and the charms which the moon and the sun and the twilight wrought upon the one graceful curves, reflected images, woody heights, soft distances and over the whole sun scene, far and near, the dissolving lights drifted steadily, enriching it, every passing the moment, with new marvels of coloring. The world was new to me, and I had never seen anything like this at home. But as I have said, a day came when I began to cease from noting the glories and the charms which the moon and the sun and the twilight wrought upon the river’s face another day came when I ceased altogether to note them. Then, if that sunset scene had been repeated, I should have looked upon it without rapture, and should have commented upon it, inwardly, after this fashion.',
imageLink3:'@/assets/Screen2Assets/Technology2.jpg',
heading5:'  In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a secondary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies.',
author:'― Alvaro Videla'



      }
    }
  },
  props:{
    getTemplateDetails:null
  },
  updated(){
    console.log(this.templateDetails)
    this.$store.commit('changeDraftdetails',["templateDetails",this.templateDetails])
    
  }
}

</script>
<style scoped>
.carousel {
  margin-bottom: 4rem;
}

.carousel {
  position: relative;
}

.heading {
  text-align: -webkit-center;
  padding: 20%;
  margin-top: -15%;
  
}

.slider {
  padding: 20% 0% 0% 0%;
margin-top: -25%;
padding: 30% 30% 30% 30%;
  margin-top: -45%;
  


}

.first-slide {
  height: 40%;
  /* margin-top: -80%; */
}

.second-slide {
  height: 40%;
}

.third-slide {
  height: 40%;
}
.bodyparagraph{
margin-top: -60%;
padding: 30%;
}

.template3{
  padding: 20% 0% 0% 0%;
padding: 30% 30% 30% 30%;
  margin-top: -55%;
  
}

.end{
  margin-top: -55%;
padding: 30%;

}
</style>