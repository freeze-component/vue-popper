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
    visible: {
      type: Boolean,
      default: false
    },
    visibleArrow: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  watch: {
    ['reference && popper']() {
      this.$nextTick(() => this.createPopper());
    }
  },

  methods: {
    createPopper() {
      if (this.cachePlacement === this.placement ||
          !/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)
        ) {
        return;
      }

      this.cachePlacement = this.placement;
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy();
      }

      this.options.placement = this.placement;
      this.options.offset = Number(this.offset);

      this.popperJS = new PopperJS(
        this.reference,
        this.popper,
        this.options
      );
    },

    appendArrow(element) {
      let hash;

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

  ready() {
    this.reference = this.reference || this.$els.reference;
    if (!this.reference) {
      console.error('[vue-popper] reference is required.');
    }
    this.popper = this.popper || this.$els.popper;
    if (!this.popper) {
      console.error('[vue-popper] popper is required.');
    }

    if (this.visibleArrow) {
      this.appendArrow(this.popper);
    }
  },

  beforeDestroy() {
    this.popperJS.destroy();
  }
};
