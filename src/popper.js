import PopperJS from 'popper.js';

/**
 * @param {HTMLElement} [reference=$els.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$els.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -right), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: Object,
    popper: Object,
    offset: {
      default: 0
    },
    visible: Boolean,
    visibleArrow: Boolean,
    autoCreate: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  watch: {
    'visible'() {
      if (!this.popperJS && this.autoCreate) {
        this.createPopper();
      }
    }
  },

  methods: {
    createPopper() {
      if (this.cachePlacement === this.placement ||
          !/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)
        ) {
        return;
      }

      this.popper = this.popper || this.$els.popper;
      this.reference = this.reference || this.$els.reference;

      if (!this.popper || !this.reference) {
        return;
      }

      if (this.visibleArrow) {
        this.appendArrow(this.popper);
      }

      this.cachePlacement = this.placement;
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy();
      }

      this.$set('options.placement', this.placement);
      this.$set('options.offset', this.offset);

      this.popperJS = new PopperJS(
        this.reference,
        this.popper,
        this.options
      );
    },

    appendArrow(element) {
      let hash;
      if (this.appended) {
        return;
      }

      this.appended = true;

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      const arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    }
  },

  beforeDestroy() {
    if (this.popperJS) {
      this.popperJS.destroy();
    }
  }
};
