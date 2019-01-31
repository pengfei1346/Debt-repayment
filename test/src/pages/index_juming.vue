<template>
  <div id="app">
    //使用子组件testSlot
    <test-slot>
      //slot=one这个div会替换掉子组件里name="one"的slot标签
      <div slot="one">
        <span>one</span>
        <span>第一个</span>
      </div>
      //这个div没有用slot指定名字所以会替换掉子组件里没有name属性的slot标签
      <div>
        <span>此div没有slot</span>
      </div>
      //slot=two这个div会替换掉子组件里name="two"的slot标签
      <div slot="two">
        <span>two</span>
        <span>第二个</span>
      </div>
    </test-slot>
  </div>
</template>

<script>
  import testSlot from '../components/com_juming'
  export default {
    data(){
      return {

      }
    },
    components:{
      testSlot
    }
  }
</script>

<style>

</style>
