<template>
  <div>
    <button @click="addCard">创建</button>
    <component :showHide="receiveAddData" :is="addModal"></component>
  </div>
</template>

<script>
const modal = resolve => require(['./Modal.vue'], resolve)
export default {
  name: 'addCard',
  data () {
    return {
      addModal: null
    }
  },
  methods: {
    // 显示输入框
    addCard () {
      this.addModal = modal
    },
    receiveAddData (data) {
       switch (data) {
         case 1:
             this.modifyTipSHow = true
           this.modifyTip = '添加成功'
             break;
         case 2:
           this.modifyTipShow = true
           this.modifyTip = '添加失败, 请重试！'
             break;
       }
       this.addModal = null
    }
  },
  mounted () {
    this.$message({
      msg: 'test message'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
