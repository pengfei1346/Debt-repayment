<template>
  <div id="app">
    <test-slot>
      <span>我是父组件里的文字，但是我要被放到子组件里</span>
    </test-slot>
    <br>
    <br>
    <router-link to="/com1">去下一个页面</router-link>
    <br>
    <br>
    <br>
    <br>
    <form name="frm" method="post" onsubmit="return false;">
      <input type="text" placeholder="姓名">
      <input type="text" placeholder="年龄">
      <button>提交</button>
    </form>
  </div>
</template>

<script>
  import testSlot from '../components/com_1'
  export default {
    data(){
      return {

      }
    },
    components:{
      testSlot
    },

    beforeRouteLeave(to, from, next) {
      // 设置下一个路由的 meta
      to.meta.keepAlive = true; // B 跳转到 A 时，让 A 缓存，即不刷新（代码写在B页面）
      next();
    }
  }
</script>

<style>

</style>
