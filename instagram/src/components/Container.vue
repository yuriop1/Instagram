<template>
  <div>
    <Post :param="param"/>
    <Post :param="param"/>
    <Post :param="param"/>
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