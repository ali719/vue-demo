<template>
  <div>
    <p>click {{count}} times count {{eventOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default{
    computed:{
      ...mapState(['count']),
      ...mapGetters(['eventOrOdd'])
    },

    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
  }
</script>
<!--<script>

export default {
  computed:{
    eventOrOdd(){
      return this.$store.getters.eventOrOdd
    },
    count(){
      return this.$store.state.count
    },
  },

  methods:{
    increment(){
      this.$store.dispatch('increment')
    },
    decrement(){
      this.$store.dispatch('decrement')
    },
    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    },
  }
}
</script>-->

<style>

</style>
