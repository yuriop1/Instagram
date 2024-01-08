<template>
  <div>
    <Post :param="param[i]" v-for="(instaNem, i) in param" :key="i"/>

</div>
</template>

<script>
import Post from './Post.vue';
export default {
    name: 'App',
    components: {
        Post,
    },
    props : {
        param : Array,
    },
}
</script>

<style>

</style>