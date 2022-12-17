  import { createStore } from 'vuex'

export default createStore({
  state: {
    currentDraftDetails:{
      projectName:'hi',
      isPaid:false,
      isWhiteListed:false,
      whiteList:[],
      templateId:null,
      templateDeatils:{},
      userId:null,
      published:false,
    }
  },
  mutations: {
    clearCurrentDraftState(state){
      state.currentDraftDetails.projectName='';
      state.currentDraftDetails.isPaid=false;
      state.currentDraftDetails.isWhiteListed=false;
      state.currentDraftDetails.whiteList=[];
      state.currentDraftDetails.templateId=null;
      state.currentDraftDetails.templateDeatils={}
      state.currentDraftDetails.userId=null;
      state.currentDraftDetails.published=false;
      console.log(state.currentDraftDetails);
    },
    changeDraftDetails(state,dataName,payLoad){
      console.log(dataName,payLoad);
      if(dataName=='projectName'){
        state.currentDraftDetails.projectName=payLoad;
      }
      else if(dataName=='isPaid'){
        state.currentDraftDetails.isPaid=payLoad;
      }
      else if(dataName=='isWhiteListed'){
        state.currentDraftDetails.isWhiteListed=payLoad;
      }
      else if(dataName=='whiteList'){
        console.log(payLoad);
        // state.currentDraftDetails.whiteList=[...payLoad];
      }
      else if(dataName=='templateId'){
        state.currentDraftDetails.templateId=payLoad;
      }
      else if(dataName=='templateDeatils'){
        state.currentDraftDetails.templateDeatils={...payLoad}
      }
      else if(dataName=='userId'){
        state.currentDraftDetails.userId=payLoad;
      }
      else if(dataName=='published'){
        state.currentDraftDetails.published=payLoad;
      }
      console.log(state.currentDraftDetails);
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
