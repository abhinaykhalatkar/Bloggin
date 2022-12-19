<template>
  <div class="Temp">
    <h1>{{ this.templateDetails.titleText }}</h1>

  </div>
  <div>
    <img class="template4" :src="this.templateDetails.imageLink" alt="Placeholder image">

    <div class="head"><br />
      <h2>{{ this.templateDetails.secondHeading}}
      </h2>
      <div class="blog">
      <p class="card-text mb-auto">{{ this.templateDetails.secondContent}}</p>
    <div>{{this.templateDetails.auther}}</div>
    <div class="mb-1 text-muted dateposted">{{ this.templateDetails.postDate }}</div>
    </div>
  </div>
        <div class="fr4-2">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">Food</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">{{ this.templateDetails.thirdHeading}}
          </a>
        </h3>
        <div class="mb-1 text-muted"><br />{{this.templateDetails.postDate}}</div>
        <p class="card-text mb-auto">{{ this.templateDetails.thirdContent}}</p>
        <div>{{this.templateDetails.auther}}</div>
      </div>
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">Food</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">{{ this.templateDetails.forthHeading }}
          </a>
        </h3>
        <div class="mb-1 text-muted"><br />{{this.templateDetails.postDate}}</div>
        <p class="card-text mb-auto">{{ this.templateDetails.forthContent}}</p>
        <div> ―{{this.templateDetails.auther}}</div>
      </div>
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">Food</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#"> {{ this.templateDetails.fifthHeading }}
          </a>
        </h3>
        <div class="mb-1 text-muted"><br />{{this.templateDetails.postDate}}</div>
        <p class="card-text mb-auto">{{ this.templateDetails.fifthContent }}</p>
        <div>{{this.templateDetails.auther}}</div>
      </div>
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">Food</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">{{ this.templateDetails.sixthHeading }}
          </a>
        </h3>
        <div class="mb-1 text-muted"><br />{{this.templateDetails.postDate}}</div>
        <p class="card-text mb-auto">{{ this.templateDetails.sixthContent }}</p>
        <div>―{{this.templateDetails.auther}}</div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "template 4",
  components: {},
  data(){
    return {
      templateDetails:{
    titleText:'travel',
    imageLink:'https://cdn.pixabay.com/photo/2021/01/30/20/42/buildings-5965278__480.jpg',
    auther:' Alvaro Videla',
    postDate:'July 31,2022',
    secondHeading:'How I went from selling food in the street to working for top firms in tech',
    secondContent:'In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a secondary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
    thirdHeading:'How I went from selling food in the street to working for top firms in tech',
    thirdContent:'In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a thirdary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
    forthHeading:'How I went from selling food in the street to working for top firms in tech',
    forthContent:'In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a forthary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
    fifthHeading:'How I went from selling food in the street to working for top firms in tech',
    fifthContent:'In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a fifthary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
    sixthHeading:'How I went from selling food in the street to working for top firms in tech',
    sixthContent:'In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a sixthary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressftffsixt'
  }
    
    }
  },
  props:{
    getTemplateDetails:null
  },
  updated(){
    console.log(this.templateDetails)
    this.$store.commit('changeDraftDetails',["templateDeatils",this.templateDetails])
  }
}

</script>
<style scoped>
textarea{
  font-size:x-large;
  font-weight:bolder;
}
.template4 {
  
  margin: auto;
  display: block;    height: 65vh;
    width: 90%;
  
}

.text-left {
  text-align: left;
  display: grid;
}


.Temp {
  text-align: -webkit-center;
}

.fr4-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 0% 10% 0% 10%;
  margin-bottom: 2%;
}

.head {
  text-align: center;
}

.dateposted {
  margin-bottom: 10px;
  display: block;
}
.blog{
  padding: 0% 10% 0% 10%;
  margin-bottom: 3%;
}

</style>