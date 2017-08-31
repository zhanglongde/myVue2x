<template>
  <div>
    <div class="bg">
      子元素的根元素会继承父元素的 Scoped!!!
    </div>
    <Sub></Sub>
  </div>
</template>

<script>
//const Sub = resolve => require(['./Sub.vue'], resolve)
import Sub from './Sub.vue'
export default {
  name: 'Parent',
  data () {
    return {
    }
  },
  components: { Sub }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg {
    background-color: #58a;
    width: 100px;
    height: 100px;
  }
</style>
