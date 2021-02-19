import Message from './src/index'

/* istanbul ignore next */
Message.install = function (Vue) {
  Vue.component(Message.name, Message)
}

export default Message
