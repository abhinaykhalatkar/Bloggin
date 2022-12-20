  import { createStore } from 'vuex'

export default createStore({

  state: {
    react:true,
    registrationDone:false,
  
    currentPublishedLink:'No Link',

    currentDraftDetails:{
      projectName:'',
      isPaid:false,
      isWhiteListed:false,
      whiteList:[],
      templateId:null,
      templateDetails:{},
      userId:null,
      published:false,
      catagory:0
    },
    loginDetails:{
      id:null,
      userName:'',
      isLoggedIn:false,
      logInId:'',
      writtenBlogs: "",
      readBlogs: "",
      writtenQuotes: "",
      appreciation: "",
      bio: ""
    },
    template4Details:{
      titleText:{content:'travel',color:'#ac0505',fontSize:'80',add:true},
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
  },
  mutations: {
    setReact(state,payLoad){
      state.react=payLoad
    },
    clearDraft4State(state){
      
      state.template4Details.titleText={content:'travel',color:'#ac0505',fontSize:'80',add:true},
      state.template4Details.imageLink='https://cdn.pixabay.com/photo/2021/01/30/20/42/buildings-5965278__480.jpg',
      state.template4Details.auther=' Alvaro Videla',
      state.template4Details.postDate='July 31,2022',
      state.template4Details.secondHeading='How I went from selling food in the street to working for top firms in tech',
      state.template4Details.secondContent='In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a secondary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
      state.template4Details.thirdHeading='How I went from selling food in the street to working for top firms in tech',
      state.template4Details.thirdContent='In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a thirdary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
      state.template4Details.forthHeading='How I went from selling food in the street to working for top firms in tech',
      state.template4Details.forthContent='In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a forthary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
      state.template4Details.fifthHeading='How I went from selling food in the street to working for top firms in tech',
      state.template4Details.fifthContent='In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a fifthary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressful.',
      state.template4Details.sixthHeading='How I went from selling food in the street to working for top firms in tech',
      state.template4Details.sixthContent='In this series of articles I want to share with you how I got into the world of programming. I never went to university to study IT, but I found a way around it. If you like the series and want to see a book out of this, please leave a comment below. At the end of 2006, I arrived at a crossroads in my life. My hopes of becoming a sixthary school linguistics teacher had vanished in an instant, as several factors had come together and made it impossible for me to continue with my studies. Back in my hometown of Durazno, Uruguay, my wife was working long hours for a meager $160 (USD) a month. Yes, that’s $1,920 a year. We had sacrificed our time together so I could become a teacher and get a better job because we were dreaming of a better future. The problem with dreams is they tend to vanish when you wake up, and life’s alarm clock had just gone off. Because my career trajectory had suddenly strayed off course, I moved back to my hometown to figure out my next steps. Needless to say, I was depressed at the way things were, and our living situation only made things worse. It was good to be back with my wife, but the reasons for it were stressftffsixt'
    
    },
    setDraft4Title(state,payload){
      console.log(state.template4Details.auther)
      state.template4Details.auther=payload
      console.log(state.template4Details.auther)
    },
    setIsRegister(state,payload){
      state.registrationDone=payload
    },
    setBlogLink(state,payload){
      state.currentPublishedLink=payload
    },
    clearCurrentDraftState(state){
      state.currentDraftDetails.projectName='';
      state.currentDraftDetails.isPaid=false;
      state.currentDraftDetails.isWhiteListed=false;
      state.currentDraftDetails.whiteList=[];
      state.currentDraftDetails.templateId=null;
      state.currentDraftDetails.templateDetails={}
      state.currentDraftDetails.userId=null;
      state.currentDraftDetails.published=false;
      state.currentDraftDetails.catagory=0;
    },
    clearLoginDetails(state){
      state.loginDetails.id='';
      state.loginDetails.userName='';
      state.loginDetails.isLoggedIn='';
      state.loginDetails.logInId='';
      state.loginDetails.writtenBlogs='';
      state.loginDetails.readBlogs='';
      state.loginDetails.appreciation='';
      state.loginDetails.bio='';
    },
    setLoginDetails(state,payLoad){
     
      if(payLoad[0]=='id'){
        state.loginDetails.id=payLoad[1];
      }
      else if(payLoad[0]=='userName'){
        state.loginDetails.userName=payLoad[1];
      }
      else if(payLoad[0]=='isLoggedIn'){
        state.loginDetails.isLoggedIn=payLoad[1];
      }
      else if(payLoad[0]=='logInId'){
        state.loginDetails.logInId=payLoad[1];
      }
      else if(payLoad[0]=='writtenBlogs'){
        state.loginDetails.writtenBlogs=payLoad[1];
      }
      else if(payLoad[0]=='readBlogs'){
        state.loginDetails.readBlogs=payLoad[1];
      }
      else if(payLoad[0]=='writtenQuotes'){
        state.loginDetails.writtenQuotes=payLoad[1];
      }
      else if(payLoad[0]=='appreciation'){
        state.loginDetails.appreciation=payLoad[1];
      }
      else if(payLoad[0]=='bio'){
        state.loginDetails.bio=payLoad[1];
      }
    }
   
    ,
    changeDraftDetails(state,payLoad){
     
      if(payLoad[0]=='projectName'){
        state.currentDraftDetails.projectName=payLoad[1];
      }
      else if(payLoad[0]=='isPaid'){
        state.currentDraftDetails.isPaid=payLoad[1];
      }
      else if(payLoad[0]=='isWhiteListed'){
        state.currentDraftDetails.isWhiteListed=payLoad[1];
      }
      else if(payLoad[0]=='whiteList'){
         state.currentDraftDetails.whiteList=[...payLoad[1]];
      }
      else if(payLoad[0]=='templateNo'){
        state.currentDraftDetails.templateId=payLoad[1];
      }
      else if(payLoad[0]=='templateDetails'){
        state.currentDraftDetails.templateDetails={...payLoad[1]}
      }
      else if(payLoad[0]=='userId'){
        state.currentDraftDetails.userId=payLoad[1];
      }
      else if(payLoad[0]=='published'){
        state.currentDraftDetails.published=payLoad[1];
      }
      else if(payLoad[0]=='catagory'){
        state.currentDraftDetails.catagory=payLoad[1];
      }

    }
   

  },
  actions: {
    // setProjectName(store){
    //   console.log(store.state.currentDraftDetails);
    //   store.commit("clearCurrentDraftState");
    //   console.log(store.state.currentDraftDetails);


    // }

  }
})
