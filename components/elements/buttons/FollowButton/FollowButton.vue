<template>
  <button
    class="follow-button"
    v-bind="$attrs"
    v-on="$listeners"
    @click="onClick"
    @keyup.enter="onClick"
  >
    Follow
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    onClick: {
      default: () => console.log('follow'), // eslint-disable-line no-console
      type: Function,
    },
  },
});
</script>

<style lang="postcss" scoped>
.follow-button {
  @apply px-3 py-2 text-center border border-current rounded border-gray-300 hover:bg-gray-100;
}
</style>
