<template>
  <div class="bio-card">
    <CardHeader class="bio-card__header">
      <h2>About</h2>
    </CardHeader>
    <CardBody class="bio-card__content">
      <p>{{ bio }}</p>
      <div class="bio-card__buttons">
        <SocialButtons :socials="socials" />
      </div>
    </CardBody>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import SocialButtons from '@/components/elements/buttons/SocialButtons/SocialButtons.vue';
import CardHeader from '@/components/elements/cards/CardHeader.vue';
import CardBody from '@/components/elements/cards/CardBody.vue';

export default defineComponent({
  name: 'BioCard',
  components: { CardBody, CardHeader, SocialButtons },
  props: {
    bio: {
      default: () =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dapibus libero. Morbi ultricies varius accumsan.',
      type: String,
    },
    socials: {
      default: () => [
        {
          icon: 'dscrd',
          name: 'Discord',
          url: 'https://discord.com/',
        },
        {
          icon: 'twch',
          name: 'Twitch',
          url: 'https://twitch.tv/',
        },
        {
          icon: 'twtr',
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'yt',
          name: 'Youtube',
          url: 'https://youtube.com/',
        },
      ],
      type: Array,
    },
  },
});
</script>

<style lang="postcss" scoped>
.bio-card {
  @apply hidden md:flex flex-col border rounded border-gray-300;
  & > div {
    @apply p-5;
  }
  & .bio-card__header {
    @apply border-b border-gray-300;
    & h2 {
      @apply text-xl font-bold;
    }
  }
  & .bio-card__content {
    & p {
      @apply text-black;
    }
  }
  & .bio-card__buttons {
    @apply mt-5;
  }
}
</style>
