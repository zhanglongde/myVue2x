<template>
  <div>
    <div>
      时刻选择
      <time-picker v-model="time"></time-picker><span>{{time}}</span>
    </div>
    <div>
      日期选择
      <date-picker v-model="time"></date-picker><span>{{date}}</span>
    </div>
  </div>
</template>

<script>
  import TimePicker from '../components/flatpickr/TimePicker.vue'
  import DatePicker from '../components/flatpickr/DatePicker.vue'
  export default {
    name: 'Index',
    data () {
      return {
        time: new Date().toString(),
        date: new Date().toString()
      }
    },
    components: {
      'time-picker': TimePicker,
      'date-picker': DatePicker
    }
  }
</script>
