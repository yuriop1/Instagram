<template>
  <div>
    <Post @click="$store.commit('likeUp')" v-show="step===0" :param="param[i]" v-for="(instaNum, i) in param" :key="i"/>

    <!-- 필터선택페이지 -->
    <div v-show="step===1">
        <div :class="emitFilter" class="upload-image" :style="`background-image: url(${url})`"></div>
        <div class="filters">
            <filterBox :url="url" v-for="filter in filterList" :key="filter" :filter="filter">
                <span>{{ filter }}</span>
            </filterBox>
        </div>
    </div> 
    <div v-show="step===2">
        <!-- 글작성페이지 -->
        <div :class="emitFilter" class="upload-image" :style="`background-image: url(${url})`"></div>
        <div class="write" >
            <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
        </div>
    </div>
    <div v-show="step===3">
        <MyPage></MyPage>
    </div>



</div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import MyPage from './MyPage.vue';
export default {
    name: 'App',
    data(){
        return {
            filterList : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
            "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
            "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            emitFilter : '',
        }
    },
    components: {
        Post,
        FilterBox,
        MyPage,
    },
    props : {
        param : Array,
        step : Number,
        url : String,
    },

    mounted(){
        this.emitter.on('박스클릭', (e)=>{
        this.emitFilter = e;
        });
    },

    methods : {},
}

</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>