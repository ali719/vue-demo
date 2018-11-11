<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completeNum}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeNum" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>


  export default {
    props:{
      todos:Array,
      selectTodos:Function,
      deleteCompleteTodos:Function
    },
    computed:{
      //完成的数量
      completeNum(){
        return this.todos.reduce((pre,todo) => pre + (todo.complete ? 1:0),0)
      },
      //是否选择同步更改
      isCheckAll:{
        get(){
          return this.todos.length === this.completeNum && this.completeNum > 0
        },

        set(value){
          this.selectTodos(value)
        }
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
