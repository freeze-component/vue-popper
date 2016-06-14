<template>
  <h1 style="margin-bottom: 100px;">vue-popper: popover demo</h1>

  <vue-popover :placement.sync="placement" :visible="popoverVisible">
    <div>这里是会弹出来的东西 🌚</div>
    <button @click="placement = 'left'">左</button>
    <button @click="placement = 'left-start'">左上</button>
    <button @click="placement = 'left-end'">左下</button>
    <br>
    <button @click="placement = 'right'">右</button>
    <button @click="placement = 'right-start'">右上</button>
    <button @click="placement = 'right-end'">右下</button>
    <br>
    <button @click="placement = 'top'">上</button>
    <button @click="placement = 'top-start'">上左</button>
    <button @click="placement = 'top-end'">上右</button>
    <br>
    <button @click="placement = 'bottom'">下</button>
    <button @click="placement = 'bottom-start'">下左</button>
    <button @click="placement = 'bottom-end'">下右</button>

    <div slot="content">
      <button @click="popoverVisible = !popoverVisible">点击出现弹出框</button>
    </div>
  </vue-popover>

  <h1 style="margin: 100px 0;">vue-popper: tooltip demo</h1>

  <vue-tooltip placement="top" content="文字提示在上面" :visible="tooltipVisible">
    <button @click="tooltipVisible = !tooltipVisible">点击出现文字提示</button>
  </vue-tooltip>

  <vue-tooltip content="bottom" :visible="tooltipVisible2">
    <button @click="tooltipVisible2 = !tooltipVisible2">点击出现文字提示 bottom</button>
  </vue-tooltip>

</template>

<script>
  import Popover from './components/popover';
  import Tooltip from './components/tooltip';

  export default {
    name: 'app',
    components: [Popover, Tooltip],
    data() {
      return {
        placement: 'top',
        popoverVisible: false,
        tooltipVisible: false,
        tooltipVisible2: false
      };
    }
  };
</script>

<style>
  body {
    padding: 100px;
  }
</style>
