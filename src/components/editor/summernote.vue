<template>
  <div>
    <div ref="editor"></div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'summernote',
  data () {
    return {
    }
  },
  mounted () {
    $(this.$refs.editor).summernote({
      lang: 'zh-CN',
      minHeight: null,
      maxHeight: null,
      focus: true,
      fontNames: [
        '宋体', '黑体', '楷体', '微软雅黑',
        'Arial', 'Verdana', 'Georgia',
        'Times New Roman', 'Microsoft JhengHei',
        'Trebuchet MS', 'Courier New', 'Impact', 'Comic Sans MS', 'Consolas'
      ],
      toolbar: [
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['style', ['bold', 'italic', 'underline', 'color']],
        ['para', ['ul', 'ol', 'paragraph', 'blockquote', 'style']],
        ['clear', ['clear']]
      ]})
  }
}
</script>
