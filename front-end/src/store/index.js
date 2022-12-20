  import { createStore } from 'vuex'

export default createStore({
  state: {
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
    }
  },
  mutations: {
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
