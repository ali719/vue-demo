<template>
  <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTtem">删除</button>
  </li>
</template>

<script>


  export default {

    props:{
      todo:Object,
      deleteTodo:Function,
      index:Number
    },

    data(){
      return{
        bgColor:'white',
        isShow:false
      }
    },

    methods:{
      handleEnter(isEnter){
        this.bgColor = isEnter ? '#ccc' : '#fff'
        this.isShow = isEnter
      },

      deleteTtem(){
        const {todo,deleteTodo,index} = this
        if (confirm(`确定要删除${todo.title}吗？`)){
          deleteTodo(index)
        }
      }
    }

  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
