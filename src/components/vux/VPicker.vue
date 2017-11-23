<template>
  <div class="container">
    <Picker :data="pData" v-model="pValue" :columns="1"></Picker>
    <button @click="getValue">获得</button>
  </div>
</template>

<style scoped>
  .container{
    width:500px;
    height:300px;
    border:1px solid #ccc;
  }
</style>

<script>
  import { Picker } from 'vux'
export default {
  name: 'VPiker',
  data () {
    return {
      pData: [{name: 'zz', value: '1'}, {name: 'kk', value: '2'}],
      pValue: ['1']
    }
  },
  methods: {
    pick (value) {
      console.log(value, this.pValue)
    },
    getValue () {
       alert(this.pValue)
    }
  },
  components: {
    Picker
  }
}
</script>
