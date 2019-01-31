<template>
  <div id="app">
    <h2>app</h2>
    <test-slot :items="items">
      <template slot-scope="props">
        <span>{{ props.addr }}</span>
        <span>{{ props.cname }}</span>
        <span>{{ props.age }}</span>
      </template>
    </test-slot>
  </div>
</template>

<script>
  import testSlot from '../components/com_3.vue'
  export default {
    data (){
      return {
        items:[
          { age:'文字1' , cname:'tom' , addr:'usa' },
          { age:'文字2' , cname:'wangwu' , addr:'uk' },
          { age:'文字3' , cname:'zhangsan' , addr:'un' }
        ]
      }
    },
    methods:{

    },
    components:{
      testSlot
    }
  }
</script>

<style>

</style>
