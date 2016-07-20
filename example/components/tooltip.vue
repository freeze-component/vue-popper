<template>
  <span>
    <span class="popper" v-el:popper v-show="visible">
      <span v-text="content"></span>
    </span>
    <span class="rel" v-el:reference>
      <slot></slot>
    </span>
  </span>
</template>

<script>
import Popper from 'vue-popper';

export default {
  name: 'vue-tooltip',

  mixins: [Popper],

  props: {
    content: String,
    visibleArrow: {
      default: true
    }
  }
};
</script>

<style scoped>
  .rel {
    display: inline-block;
    position: relative;
  }

  .popper {
    background-color: #000;
    padding: 6px;
    font-size: 12px;
    border-radius: 4px;
    color: #fff;
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
    border-color: #000 transparent transparent transparent;
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
    border-color: transparent transparent #000 transparent;
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
    border-color: transparent #000 transparent transparent;
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
    border-color: transparent transparent transparent #000;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
</style>
