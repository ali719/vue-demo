<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addT" v-model="title"/>
  </div>
</template>

<script>


  export default {
    //指定接收的属性
    props:{
      addTodo:{
        type:Function,
        required:true
      }
    },

    data(){
      return{
        title:''
      }
    },

    methods:{
/*      add (){
        //根据输入的内容封装一个TODO对象
        const title = this.title.trim()
        if (!title){
          return alert('请输入')
        }
        const todo ={
          title,
          complete:false
        }
        //调用addTodo()方法
        this.addTodo(todo)
        //清除输入的内容
        this.title = ''
      }*/
      addT () {
        // 根据输入的数据, 封装一个todo对象
        const title = this.title.trim()
        if(!title) {
          return alert('必须输入')
        }
        const todo = {
          title,
          complete: false
        }
        // 调用 addTodo()添加todo
        this.addTodo(todo)
        // 清除输入
        this.title = ''
      }
    }
  }
</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
