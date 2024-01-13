import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      name : '임동준',
      age : 20,
      likes : 0,
      alreadyLiske : false,
      more : {

      },
    }
  },
  mutations :{
    setMore(state, data){
      state.more = data
    },
    이름변경(state){
      state.name = '임유리';
    },
    나이(state, data){
      state.age += data
    },
    likeUp(state){
      if(state.alreadyLiske === false){
        state.likes++;
        state.alreadyLiske = true;
      } else{
        state.likes--;
        state.alreadyLiske = false;
      }
    },
  },
  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((a)=>{
        context.commit('setMore', a.data)
      });
    },

  }
})

export default store