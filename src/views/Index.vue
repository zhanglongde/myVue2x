<template>
  <div class="by-container">
    <div class="by-content">
      <div>
        时刻选择
        <time-picker v-model="time"></time-picker><span>{{time}}</span>
      </div>
      <div>
        日期选择
        <date-picker v-model="date"></date-picker><span>{{date}}</span>
      </div>

      <div>
        <div>音量</div>
        <page-range v-model="voice"></page-range>
        <div>亮度</div>
        <page-range v-model="brightness"></page-range>
      </div>


      <div>
        <label>是否</label>{{checked}}
        <VueSwitch on="是" off="否" size="md" v-model="isAutoSwitch" :checked="checked" @change="switchChange" type="switch switch-text switch-pill switch-info"></VueSwitch>
      </div>
      <div>
        <label>
          <vue-timepicker v-model="bootTime"></vue-timepicker><span class="ml-1">开机时间</span>
        </label>
        <label>
          <vue-timepicker v-model="shutdownTime"></vue-timepicker><span class="ml-1">关机时间</span>
        </label>
      </div>

      <button @click="testPluginMessage">测试message插件</button>
      <button @click="testPluginConfirm">测试confirm插件</button>
    </div>
  </div>
</template>

<script>
  import TimePicker from '../components/flatpickr/TimePicker.vue'
  import DatePicker from '../components/flatpickr/DatePicker.vue'
  import VueTimepicker from '../components/common/TimePicker.vue'
  import PageRange from '../components/common/PageRange.vue'
  import VueSwitch from '../components/common/Switch.vue'
  export default {
    name: 'Index',
    data () {
      return {
        time: new Date().toString(),
        date: new Date().toString(),
        isAutoSwitch: false,
        bootTime: '08:00',
        shutdownTime: '18:00',
        voice: 50,
        brightness: 50,
        checked: false
      }
    },
    components: {
      'time-picker': TimePicker,
      'date-picker': DatePicker,
      'page-range': PageRange,
      VueSwitch,
      'vue-timepicker': VueTimepicker
    },
    methods: {
      switchChange (e) {
        console.log('switchChange...')
        console.log(e)
      },
      testPluginMessage () {
        this.$message({
          msg: '测试1'
        })
      },
      testPluginConfirm () {
        console.log('test')
        this.$confirm({
          title: 'title',
          content: '测试2'
        })
      }
    }
  }
</script>
