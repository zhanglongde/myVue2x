<template>
  <div>
    <div>
      时刻选择
      <time-picker v-model="time"></time-picker><span>{{time}}</span>
    </div>
    <div>
      日期选择
      <date-picker v-model="date"></date-picker><span>{{date}}</span>
    </div>
    <div>
      <vue-timepicker v-model="time2" format="HH:mm" @change="changeTime"></vue-timepicker>
      <span>{{time2}}</span>
    </div>

    <button @click="testPluginMessage">测试message插件</button>
    <button @click="testPluginConfirm">测试confirm插件</button>
  </div>
</template>

<script>
  import TimePicker from '../components/flatpickr/TimePicker.vue'
  import DatePicker from '../components/flatpickr/DatePicker.vue'
  import VueTimepicker from 'vue2-timepicker'
  export default {
    name: 'Index',
    data () {
      return {
        time: new Date().toString(),
        date: new Date().toString(),
        time2: ''
      }
    },
    components: {
      'time-picker': TimePicker,
      'date-picker': DatePicker,
      'vue-timepicker': VueTimepicker
    },
    methods: {
      changeTime (data) {
        console.log(data, this.time2)
      },
      testPluginMessage () {
        this.$message({
          msg:'测试1'
        })
      },
      testPluginConfirm () {
        console.log('test')
        this.$confirm({
          title: 'title',
          content:'测试2'
        })
      }
    }
  }
</script>
