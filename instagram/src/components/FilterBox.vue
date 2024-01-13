<template>
  <div @click="fire" class="filter-item" :class="filter" :style="`background-image:url(${url})`">
    <slot :msg="msg"></slot>
  </div> 
</template>

<script>
export default {
    name : 'FilterBox',
    methods : {
        fire(){
            this.emitter.emit('박스클릭', this.filter)
        },
    },
    props: {
        url: String,
        filter : String,
    },
    data(){
        return{
           msg: 'hello' 
        }
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>