<template>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="?" />
      <div class="post-header" v-for="(insta, i) in follower" :key="i">
        <div class="profile" :style="`background-image:url(${insta.image})`"></div>
        <span class="profile-name">{{ insta.name }}</span>
      </div>
    </div>
</template>
<script>

import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
    name: 'MyPage',
    setup(){
        let follower = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data;
            })
        })

        return {follower}
    },
    data(){

    },

}
</script>

<style>

</style>