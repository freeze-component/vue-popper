<template>
  <div>
    <div class="popper" v-el:popper v-show="visible">
      <slot></slot>
    </div>
    <div class="rel" v-el:reference>
      <slot name="content">
        <div v-text="content"></div>
      </slot>
    </div>
  </div>
</template>

<script>
import Popper from 'vue-popper';

export default {
  name: 'vue-popover',

  props: {
    content: String,
    visibleArrow: {
      default: true
    }
  },

  mixins: [Popper]
};
</script>

<style scoped>
  .rel {
    width: 100px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    padding: 20px;
    border-style: dotted;
    border-color: black;
    border-width: medium;
  }

  .popper {
    position: absolute;
    background: #FFC107;
    color: black;
    width: 150px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0,0,0,0.5);
    padding: 10px;
    text-align: center;
  }
  .popper .popper__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }
  .popper[x-placement^="top"] {
    margin-bottom: 5px;
  }
  .popper[x-placement^="top"] .popper__arrow {
    border-width: 5px 5px 0 5px;
    border-color: #FFC107 transparent transparent transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .popper[x-placement^="bottom"] {
    margin-top: 5px;
  }
  .popper[x-placement^="bottom"] .popper__arrow {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #FFC107 transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .popper[x-placement^="right"] {
    margin-left: 5px;
  }
  .popper[x-placement^="right"] .popper__arrow {
    border-width: 5px 5px 5px 0;
    border-color: transparent #FFC107 transparent transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  .popper[x-placement^="left"] {
    margin-right: 5px;
  }
  .popper[x-placement^="left"] .popper__arrow {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #FFC107;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
</style>
