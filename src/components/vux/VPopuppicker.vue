<template>
  <div class="container">
    <PopupPicker :data="pData" v-model="pValue" :columns="1" @on-change="pick"></PopupPicker>
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
  import { PopupPicker } from 'vux'
export default {
  name: 'VPopuppiker',
  data () {
    return {
      pData: [{name: 'zz', value: '1'}, {name: 'kk', value: '2'}],
      pValue: ['1']
    }
  },
  methods: {
    pick (value) {
      console.log(value, this.pValue)
    }
  },
  components: {
    PopupPicker
  }
}
</script>
