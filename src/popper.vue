<script>
import PopperJS from 'popper.js';

/**
 * @param {HTMLElement} [reference=$els.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$els.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -right), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 */
export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    flipBehavior: {
      default: 'flip'
    },
    reference: Object,
    popper: Object,
    offset: {
      type: Number,
      default: 0
    },
    visible: {
      type: Boolean,
      default: false
    },
    visibleArrow: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    placement() {
      this.createPopper();
    }
  },

  methods: {
    createPopper() {
      if (this.cachePlacement === this.placement ||
          ['top', 'top-start', 'top-end',
          'bottom', 'bottom-start', 'bottom-end',
          'left', 'left-start', 'left-end',
          'right', 'right-start', 'right-end']
          .indexOf(this.placement) === -1) {
        return;
      }

      this.cachePlacement = this.placement;
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy();
      }

      this.popperJS = new PopperJS(
        this.reference,
        this.popper,
        {
          placement: this.placement,
          offset: this.offset,
          flipBehavior: this.flipBehavior
        }
      );
    },

    appendArrow(element) {
      let hash;

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
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
      return;
    }
    this.popper = this.popper || this.$els.popper;
    if (!this.popper) {
      console.error('[vue-popper] popper is required.');
      return;
    }

    if (this.visibleArrow) {
      this.appendArrow(this.popper);
    }

    this.createPopper();
  },

  beforeDestroy() {
    this.popperJS.destroy();
  }
};
</script>
