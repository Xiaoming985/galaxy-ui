import '../style/';
import { computed, defineComponent, h, provide } from 'vue';

export default defineComponent({
  name: 'YumRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  setup(props, ctx) {
    provide('YumRow', props.gutter);
    const Class = computed(() => [
      'yum-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : ''
    ]);
    const styles = computed(() => {
      const res = {
        marginLeft: '',
        marginRight: ''
      };
      if (props.gutter) {
        res.marginLeft = res.marginRight = `-${props.gutter / 2}px`;
      }
      return res;
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