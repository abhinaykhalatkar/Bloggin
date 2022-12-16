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
    },
   

  },
  actions: {
    setProjectName(store){
      console.log(store.state.currentDraftDetails);
      store.commit("clearCurrentDraftState");
      console.log(store.state.currentDraftDetails);


    }

  }
})
