<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step===1" @click="step++">Next</li>
      <li v-if="step===2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> 

  <h4 v-if="step===1">안녕하세요 처음만난사이 모두 안녕하세요
    저는 {{ $store.state.name }}
    <button @click="$store.commit('이름변경')">이름</button>이구요
  </h4>
  <h5 v-if="step===1">나이는 {{ $store.state.age }}
    <button @click="$store.commit('나이', 2)">살</button>
    입니다
  </h5>
  <!-- <h5>나이는 {{ 작명 }}
    <button @click="이름변경">살</button>
    입니다
  </h5> -->


  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->
  
  <Container ref="containerRef" :param="instaData" :step="step" :url="url" @containerParam = "containerParam" @write="myWrite = $event"/>

  <button @click="morebottom">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import instagramData from './assets/InstagramData.js';
import axios from 'axios';
import {mapState , mapMutations} from 'vuex';

export default {
  name: 'App',
  components: {
    Container,
  },
  data(){
    return {
      instaData : instagramData,
      moreButton : 0,
      step:3,
      url: '',
      myWrite: '',
      emitFilter: '',
      카운터: 0,
    }
  },

  mounted(){
    this.emitter.on('박스클릭', (e)=>{
      this.emitFilter = e;
    });
  },

  computed : {
    ...mapState(['name', 'age', 'likes', 'more']),
    ...mapState({ 작명:'name'})
  },

  methods : {
    ...mapMutations(['이름변경']),
    
    morebottom(){
      const addr = 'https://codingapple1.github.io/vue/more' + this.moreButton + '.json'
      axios.get(addr)
      .then((d)=>{
        this.instaData.push(d.data);
        if(this.moreButton != 1){
          this.moreButton ++
        }
      })
    },
    upload(e){
      let a = e.target.files;
      this.url = URL.createObjectURL(a[0]);
      debugger;
      this.step = 1;
    },
    publish(){
      var 내게시물 = {
      name: "Kim Hyun",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.url,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.myWrite,
      filter: "perpeua"
    };
      this.instaData.unshift(내게시물);
      this.step = 0;
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
