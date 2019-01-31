<template>
  <div class="testSlot">
    <div class="noneSlot">
      <slot></slot>
    </div>
    <div class="test-two">
      <slot name="two"></slot>
    </div>
    <div class="test-one">
      <slot name="one"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style>

</style>
