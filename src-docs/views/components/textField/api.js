export default {
  props: [{
    name: 'type',
    type: 'String',
    default: '',
    desc: '输入框的类型，在单行输入时有效 text, password, email, url, number'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: '输入框图标'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: '图标的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: '输入框的标签'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: '标签是否浮动'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: '标签的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'labelFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: '输入框获取焦点时标签的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '输入框是否不可用'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: '提示文字'
  }, {
    name: 'hintTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: '提示文字样式, 同 `class` 绑定方式一致'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: '帮助文字'
  }, {
    name: 'helpTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: '帮助文字样式, 同 `class` 绑定方式一致'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: '错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改'
  }, {
    name: 'errorColor',
    type: 'String',
    default: '',
    desc: '错误状态的时的颜色，默认为红色'
  }, {
    name: 'fullWidth',
    type: 'Boolean',
    default: 'false',
    desc: '是否将宽度设置为 100%, 默认 256px'
  }, {
    name: 'underlineShow',
    type: 'Boolean',
    default: 'true',
    desc: '是否显示底部的横线'
  }, {
    name: 'underlineClass',
    type: 'String,Object,Array',
    default: '',
    desc: '底部横线样式, 同 `class` 绑定方式一致'
  }, {
    name: 'underlineFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: '输入框获取焦点时底部横线样式, 同 `class` 绑定方式一致'
  }, {
    name: 'inputClass',
    type: 'String,Object,Array',
    default: '',
    desc: '输入框样式, 同 `class` 绑定方式一致'
  }, {
    name: 'multiLine',
    type: 'Boolean',
    default: 'false',
    desc: '是否为多行输入'
  }, {
    name: 'rows',
    type: 'Number',
    default: '1',
    desc: '行数'
  }, {
    name: 'rowsMax',
    type: 'Number',
    default: '',
    desc: '最大行数'
  }, {
    name: 'maxLength',
    type: 'Number',
    default: '0',
    desc: '可输入的最大长度'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: '输入框的值，可不设置此参数，使用 v-model 指令代替'
  }],
  events: [{
    name: 'focus',
    desc: '输入框获取焦点时触发'
  }, {
    name: 'blur',
    desc: '输入框失去焦点时触发'
  }, {
    name: 'input',
    desc: 'value 发生改变触发的事件，传入新的value, (value)'
  }, {
    name: 'change',
    desc: '用户输入时触发事件，传入输入框的 value'
  }],
  slots: [{
    name: 'default',
    desc: '用于和其它组件配合使用，可以保留输入框的样式，但内部表单组件可以放置其它的组件，现在的 `selectField` `datePicer` `timePicker` 都是这种方式'
  }]
}
