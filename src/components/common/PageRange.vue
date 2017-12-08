<template>
  <input type="range" min="0" max="100" step="1" value="0" @input="rangeChange" v-model="rangeData">
</template>
<style scoped>
  /*//滑块*/
  input[type='range']{
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    height: 3px;
    background-color: #E4E4E4;
    border-radius: 100px;

    -webkit-tap-highlight-color:transparent;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 28px;
    height:28px;
    border-radius:100%;
    background-color: #fff;
    border:none;
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.15), 0 2px 3px 0 rgba(0,0,0,0.16), 0 3px 2px 0;
    cursor: ew-resize;
  }
  input[type='range']:focus {
    outline: none;
  }
</style>
<script>
  import $ from 'jquery'
  export default {
    name: 'PageRange',
    data () {
      return {
        rangeData: this.value
      }
    },
    props: {
      value: Number
    },
    methods: {
      changeStyle (v) {
        let target = this.$el
        let val = v || $(target).val()
        let valPercentage = (val - $(target).attr('min')) / ($(target).attr('max') - $(target).attr('min'))
        $(target).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + valPercentage + ', #4184F3), ' + 'color-stop(' + valPercentage + ', #E4E4E4)' + ')')
      },
      rangeChange () {
        this.changeStyle()
        this.$emit('input', parseInt(this.rangeData))
      }
    },
    watch: {
      value (newData) {
        this.changeStyle(newData)
        this.rangeData = newData
      }
    },
    mounted () {
      this.changeStyle()
    }
  }
</script>
