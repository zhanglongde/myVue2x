import Message from './common/Message/Message'
import Confirm from './common/Confirm/Confirm'

const install = function(Vue) {
  Vue.component(Confirm.name, Confirm)
  Vue.prototype.$confirm = Confirm

  //注册全局组件
  Vue.component(Message.name, Message)
  //添加全局API
  Vue.prototype.$message = Message
}

export default install
