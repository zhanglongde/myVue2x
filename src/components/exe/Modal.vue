<template>
  <div class="modal-box">
    <div class="mask"></div>
    <div class="container">
      <div class="row">
        <label>请输入开户行:</label><input type="text" v-model="account">
      </div>
      <div class="row">
        <label>账户名称:</label><input type="text">
      </div>
      <div class="row">
        <label>银行账号:</label><input type="text">
      </div>
      <div class="row">
        <label>期初余额:</label><input type="text"><span>元</span>
      </div>
      <div class="row">
        <button @click="showHide(1)">提交</button>
        <button @click="save">保存</button>
        <button>返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      account: ''
    }
  },
  props: [
    'showHide'
  ],
  methods: {
    save() {
      console.log(this.account)
    }
  }
}
</script>
