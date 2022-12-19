
<template>
  <div class="foodText">
    <h1>Food</h1>
  </div>

  <form class="container1">
  <div class="heading">
    <h3><a class="text-dark" href="#">How I went from selling food in the street to working for top firms in tech
      </a>
      <div class="mb-1 text-muted dateposted">
        <h4>Posted On July 31,2022</h4>
      </div>
    </h3>
  </div>

  

  <div class="container"> 
    <div class="row">
      <div class="col-sm-6 ">

        <p class="card-text mb-auto">In this series of articles I want to share with you how I got into the world of
          programming. I never went to university to study IT, but I found a way around it. If you like the series and
          want to see a book out of this, please leave a comment below.

          At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a secondary school
          linguistics teacher had vanished in an instant, as several factors had come together and made it impossible
          for me to continue with my studies.

          Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month.
          Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better
          job because we were dreaming of a better future.

          The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off.

          Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my
          next steps. Needless to say, I was depressed at the way things were, and our living situation only made
          things worse. It was good to be back with my wife, but the reasons for it were stressful.</p>
        <div>― Alvaro Videla</div>
      </div>
    </div>
  </div>
  

   <div class="one"> 
    <h2><p class="font-weight-bold">I like to reinvent myself</p></h2>
    <h6>Posted On July 31,2022</h6>
   </div> 

   <div class="two"> 
    <h2>Everything is design</h2>
    <h6>Posted On July 31,2022</h6>
  </div>

  <div class="three"> 
    <h2>Its all about experience</h2>
    <h6>Posted On July 31,2022</h6>
   </div> 

   
  <div class="four"> 
    <h2>This is not my code</h2>
    <h6>Posted On July 31,2022</h6>
   </div> 

   
  <div class="five"> 
    <h2>Support Human Activity</h2>
    <h6>Posted On July 31,2022</h6>
   </div> 

</form>

<div> <img class="foodImage" :src="require('@/assets/Screen2Assets/Food.jpg')" alt="Placeholder image">
</div>

</template>
<script>
export default {
  name: "template2",
  components: {}
}

</script>

<style scoped>
.foodText {
  text-align: -webkit-center;
}

.foodImage{
  position: absolute;
height: 170%;
width: 48%;
top: 30%;
left: 48%;

}

.container{
  margin-left: 1%;
  margin-bottom: 7%;
  padding-right: 5%;
}

.container1 {
  margin-bottom: 7%;
  padding-left: 8%;
 
}

.one{
  margin-bottom: 7%;

}

.two{
  margin-bottom: 7%;

}

.three{
  margin-bottom: 7%;

} 

.four{
  margin-bottom: 7%;

} 

.five{
  margin-bottom: 7%;

} 

</style>





