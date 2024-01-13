import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : '임동준',
      age : 20,
      likes : 0,
      alreadyLiske : false,
    }
  },
  mutations :{
    이름변경(state){
      state.name = '임유리';
    },
    나이(state, data){
      state.age += data
    },
    likeUp(state, data){
      if(state.alreadyLiske === false){
        state.likes++;
        state.alreadyLiske = true;
      } else{
        state.likes--;
        state.alreadyLiske = false;
      }
    },
  },
})

export default store