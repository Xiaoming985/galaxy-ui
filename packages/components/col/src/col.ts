import '../style/';
import { computed, defineComponent, h, inject } from 'vue';

export default defineComponent({
  name: 'YumCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props, ctx) {
    const gutter = inject('YumRow') as number;

    const Class = computed(() => {
      const res: string[] = [];
      const pops = ['span', 'offset'] as const;
      pops.forEach(item => {
        const size = props[item];

        if (typeof size === 'number' && size > 0) {
          res.push(`yum-col-${item}-${size}`);
        }
      });
      return ['yum-col', ...res];
    });
    const styles = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        };
      }
      return {};
    });
    return () =>
      h(
        props.tag,
        {
          class: Class.value,
          style: styles.value
        },
        ctx.slots.default?.()
      );
  }
});