<template>
  <div class="container">
    {{bootTime}}
    <DateTime v-model="bootTime"></DateTime>
    <!--<PageTime></PageTime>-->
  </div>
</template>

<style scoped>
  .container{
    width:200px;
    height:300px;
    border:1px solid #ccc;

    color:#000;
  }
</style>

<script>
export default {
  name: 'Vux',
  data () {
    return {
      bootTime: '01:00'
    }
  },
  methods: {
  },
  components: {
    PageTime: require('./PageTime.vue'),
    DateTime: require('./DateTime.vue')
  }
}
</script>
