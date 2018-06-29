import PopupManager from './manager';
import { getZIndex } from './utils';

export default {
  props: {
    open: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    overlayClose: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    escPressClose: { // 按退出键是否触发关闭事件
      type: Boolean,
      default: true
    },
    appendBody: { // 是否添加到 body 元素后, 内部使用
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },
  methods: {
    overlayClick (e) {
      if (!this.overlay || !this.overlayClose || !this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', 'overlay');
    },
    escPress (e) {
      if (!this.escPressClose || !this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', 'esc');
    },
    setZIndex () {
      const dom = this.$el;
      if (!this.zIndex) this.zIndex = getZIndex();
      if (dom) dom.style.zIndex = this.zIndex;
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    },
    popupEl () {
      return this.$el;
    },
    appendPopupElToBody () {
      if (!this.appendBody) return;
      this.$nextTick(() => document.body.appendChild(this.$el));
    }
  },
  mounted () {
    if (this.open) {
      PopupManager.open(this);
      this.appendPopupElToBody();
    }
  },
  updated () {
    if (!this.overlay && this.open) {
      this.setZIndex();
    }
  },
  beforeDestroy () {
    PopupManager.close(this);
    if (this.appendBody) {
      if (!this.$el) return;
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }
  },
  watch: {
    open (val, oldVal) {
      if (val) {
        this.resetZIndex();
        PopupManager.open(this);
        this.appendPopupElToBody();
      } else {
        PopupManager.close(this);
      }
    }
  }
};
