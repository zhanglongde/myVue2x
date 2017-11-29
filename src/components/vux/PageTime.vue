<template>
  <PopupPicker :data="pData" v-model="pValue" :columns="1" @on-change="pick" :show-name="true" :value-text-align="'left'"></PopupPicker>
</template>

<style scoped>
  .container{
    width:200px;
    height:300px;
    border:1px solid #ccc;
  }
</style>

<script>
  import { PopupPicker } from 'vux'
export default {
  name: 'PageTime',
  data () {
    return {
      pData: [],
      pValue: []
    }
  },
  methods: {
    pick (value) {
      console.log(value, this.pValue)
    }
  },
  components: {
    PopupPicker
  },
  created () {
    for (let i = 0; i < 24; i++) {
      let s = i < 10 ? '0' + i : i.toString()
      this.pData[i] = {name: s, value: s}
    }
    this.pValue = ['00']
  }
}
</script>
