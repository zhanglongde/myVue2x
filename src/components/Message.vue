<template>
  <div class='y-mask-white-dialog' v-show='show'>
    <div class='y-message  animated zoomIn' >
      <span v-html="msg"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      msg: String,
      timeout: Number,
      callback: Function,
      icon: String,
    },
    data() {
      return {
        show: true,
      };
    }
  }
</script>
