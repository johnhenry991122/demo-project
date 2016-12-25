import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.lang = getUrlParam('lang') || window.localStorage.getItem('lang') || 'zh'

Vue.locale('zh', {
  install: '快速开始-安装',
  usage: '快速开始-使用',
  changeLog: '更新日志',
  contributing: '贡献指南',
  colors: '颜色',
  theme: '主题',
  appbar: '组件-AppBar',
  autoComplete: '组件-AutoComplete',
  avatar: '组件-Avatar',
  badge: '组件-Badge',
  bottomNav: '组件-BottomNavigation',
  bottomSheet: '组件-BottomSheet',
  flatButton: '组件-FlatButton',
  raisedButton: '组件-RaisedButton',
  iconButton: '组件-IconButton',
  floatButton: '组件-FloatActionButton',
  card: '组件-Card',
  chip: '组件-Chip',
  datePicker: '组件-DatePicker',
  dialog: '组件-Dialog',
  divider: '组件-Divider',
  drawer: '组件-Drawer',
  gridList: '组件-GridList',
  icon: '组件-Icon',
  linearProgress: '组件-LinearProgress',
  circularProgress: '组件-CircularProgress',
  list: '组件-List',
  menu: '组件-Menu',
  iconMenu: '组件-IconMenu',
  dropDownMenu: '组件-DropDownMenu',
  paper: '组件-Paper',
  popover: '组件-Popover',
  selectField: '组件-SelectField',
  checkbox: '组件-Checkbox',
  radio: '组件-Radio',
  'switch': '组件-Switch',
  slider: '组件-Slider',
  snackbarToast: '组件-SnackbarToast',
  stepper: '组件-Stepper',
  subHeader: '组件-SubHeader',
  table: '组件-Table',
  tabs: '组件-Tabs',
  textField: '组件-TextField',
  timePicker: '组件-TimePicker',
  tooltip: '组件-Tooltip',
  contentBlock: '组件-ContentBlock',
  flexbox: '组件-FlexBox',
  grid: '组件-Grid',
  infiniteScroll: '组件-InfiniteScroll',
  pagination: '组件-Pagination',
  picker: '组件-Picker',
  popup: '组件-Popup',
  refreshControl: '组件-RefreshControl'
})

Vue.locale('en', {
  install: 'Installation',
  usage: 'Usage',
  changeLog: 'ChangeLog',
  contributing: 'Contributing',
  colors: 'Colors',
  theme: 'Themes',
  appbar: 'App Bar',
  autoComplete: 'Auto Complete',
  avatar: 'Avatar',
  badge: 'Badge',
  bottomNav: 'Bottom Navigation',
  bottomSheet: 'Bottom Sheet',
  flatButton: 'Flat Button',
  raisedButton: 'Raised Button',
  iconButton: 'Icon Button',
  floatButton: 'Float Action Button',
  card: 'Card',
  chip: 'Chip',
  datePicker: 'Date Picker',
  dialog: 'Dialog',
  divider: 'Divider',
  drawer: 'Drawer',
  gridList: 'Grid List',
  icon: 'Icon',
  linearProgress: 'Linear Progress',
  circularProgress: 'Circular Progress',
  list: 'List',
  menu: 'Menu',
  iconMenu: 'Icon Menu',
  dropDownMenu: 'DropDown Menu',
  paper: 'Paper',
  popover: 'Popover',
  selectField: 'Select Field',
  checkbox: 'Checkbox',
  radio: 'Radio',
  'switch': 'Switch',
  slider: 'Slider',
  snackbarToast: 'Snackbar & Toast',
  stepper: 'Stepper',
  subHeader: 'Sub Header',
  table: 'Table',
  tabs: 'Tabs',
  textField: 'Text Field',
  timePicker: 'Time Picker',
  tooltip: 'Tooltip',
  contentBlock: 'Content Block',
  flexbox: 'Flex Box',
  grid: 'Grid',
  infiniteScroll: 'Infinite Scroll',
  pagination: 'Pagination',
  picker: 'Picker',
  popup: 'Popup',
  refreshControl: 'Refresh Control'
})

function getUrlParam (param) {
  var reg = new RegExp('[&,?,&amp;]' + param + '=([^\\&]*)', 'i')
  var hrefStr = window.location.search
  hrefStr = decodeURIComponent(decodeURIComponent(hrefStr))
  var value = reg.exec(hrefStr)
  return value ? value[1] : ''
}
