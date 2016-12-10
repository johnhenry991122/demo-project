export default {
  props: [{
    name: 'name',
    type: 'String',
    default: '',
    desc: 'props.name'
  }, {
    name: 'nativeValue',
    type: 'String',
    default: '',
    desc: 'props.nativeValue'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'labelLeft',
    type: 'Boolean',
    default: 'false',
    desc: 'props.labelLeft'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'uncheckIcon',
    type: 'String',
    default: 'check_box_outline_blank',
    desc: 'props.uncheckIcon'
  }, {
    name: 'checkedIcon',
    type: 'String',
    default: 'check_box',
    desc: 'props.checkedIcon'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: 'props.value'
  }],
  events: [{
    name: 'input',
    desc: 'events.input'
  }, {
    name: 'change',
    desc: 'events.change'
  }]
}
