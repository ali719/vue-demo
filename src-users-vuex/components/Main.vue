<template>
  <div>
    <h2 v-show="firstView">请输入关键字进行搜索</h2>
    <h2 v-show="loading">Loading......</h2>
    <h2 v-show="errorMsg">出错啦。。。</h2>
    <div class="row" v-show="users.length">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>

</template>
<script>
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['firstView','loading','users','errorMsg'])
    }

  }


</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
