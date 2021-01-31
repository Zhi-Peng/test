import {
  Select,
  Option,
  Input,
  Message,
  MessageBox,
  Notification
} from 'element-ui'
const element = {
  install: function(Vue) {
      Vue.use(Select)
      Vue.use(Option)
      Vue.use(Input)

      Vue.prototype.$message = Message;
      Vue.prototype.$confirm = MessageBox.confirm;
      Vue.prototype.$notify = Notification;

  }
}

export default element