<template>
  <div class="time-wrapper">
    <Group>
      <Datetime :format="'HH:mm'" v-model="time" @on-change="pick"></Datetime>
    </Group>
  </div>
</template>

<style lang="less">
  .time-wrapper{
    max-width:50px;
  }
  .time-wrapper .weui-cells,
  .time-wrapper .weui-cell,
  .time-wrapper .weui-cell__ft{
    margin:0;
    padding:0;
  }
  .time-wrapper .weui-cells::before,
  .time-wrapper .weui-cells::after{
    content:'';
    border:none;
    height:0;
  }
  .time-wrapper .weui-cell__ft{
    text-align:left;
  }
  .time-wrapper .weui-cell_access .weui-cell__ft::after{
    width:0;
    height:0;
    border:none;
  }
  .time-wrapper .vux-cell-value{
    display:inline-block
  }
</style>

<script>
  import { Group, Datetime } from 'vux'
export default {
  name: 'DateTime',
  data () {
    return {
      time: this.value
    }
  },
  props: {
    value: String
  },
  methods: {
    pick (value) {
      this.$emit("input", this.time)
    }
  },
  components: {
    Group,
    Datetime
  }
}
</script>
