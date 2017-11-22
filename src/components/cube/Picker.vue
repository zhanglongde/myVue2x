<template>
  <div class="container">
    <!--<cube-button @click="showPicker">Picker</cube-button>-->
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
//  import { Button } from 'cube-ui'
//  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
//export default {
//  name: 'piker',
//  data () {
//    return {
//    }
//  },
//  mounted () {
//    this.picker = this.$createPicker({
//      title: 'Picker选择器-单列',
//      data: [col1Data],
//      onSelect: (selectedText, selectedIndex) => {
//        this.$createDialog({
//          type: 'warn',
//          content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
//          icon: 'cubeic-alert'
//        }).show()
//      },
//      onCancel: () => {
//        this.$createToast({
//          type: 'correct',
//          txt: 'Picker canceled',
//          time: 1000
//        }).show()
//      }
//    })
//  },
//  methods: {
//    showPicker () {
//      this.picker.show()
//    }
//  },
//  components: {
//    CubeButton: Button
//  }
//}
</script>
