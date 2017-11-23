<template>
  <div>
      <cell title="title" value="value"></cell>
  </div>
</template>

<script>
  import { Cell } from 'vux'
export default {
  name: 'VCell',
  data () {
    return {
      title: 'testTitle',
      value: 'testValue'
    }
  },
  components: {
    Cell
  }
}
</script>
