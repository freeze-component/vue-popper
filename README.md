# vue-popper
> A popper mixin for Vue.js using [popper.js](https://popper.js.org/).

## Demo
https://element-component.github.io/vue-popper/

## Usage
```javascript
import Popper from 'vue-popper'

export default {
  mixins: [Popper],

  props: {
    content: String,
    visibleArrow: {
      default: true
    }
  },

  template: `
    <span>
      <div class="popper" v-el:popper v-show="visible">
        <span v-text="content"></span>
      </div>
      <div class="rel" v-el:reference>
        <slot></slot>
      </div>
    </span>
  `
}
```

## API
| Option            | Description                                                 | Value                         | Default       |
|-------------------|-------------------------------------------------------------|-------------------------------|---------------|
| reference           | The reference element used to position the popper.                                  | HTMLElement                       | this.$els.reference       |
| popper          |  The HTML element used as popper, or a configuration used to generate the popper. | HTMLElement | this.$els.popper |
| placement    | Placement of the popper.                                 | `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`   | 'bottom' |
| offset             | Amount of pixels the popper will be shifted (can be negative).    | Number                       | 0          |
| visible | Visibility of the popup element. | Boolean                       | false          |
|visible-arrow | Visibility arrow, no style. | Boolean | false |

## Methods
- createPopper

## Development

```shell
make dev
```

## Production
```
make dist
```

## License
MIT
