<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ param.name }}</span>
    </div>
    <div :class="param.filters" class="post-body" style="{ backgroundImage : `url(${param.postImage})`}"></div>
    <div class="post-content">
      {{ $store.state.likes }}
      <p>{{ param.likes }}</p>
      <p><strong>{{ param.filters }}</strong> {{ param.components }}</p>
      <p class="date">{{ param.date }}</p>
      <p>{{ param.content }}</p>
    </div>
</div> 
</template>

<script>
export default {
    name : 'detailVue',
    props : {
        param : Array,
    }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>