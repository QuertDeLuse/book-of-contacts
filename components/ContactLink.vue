<template>
  <nuxt-link :to="`contacts/${to}`" class="Contact" :class="$style.link">
    <h3 :class="$style.name">{{ name }}</h3>
    <p :class="$style.email">{{ email }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Number,
      default: '',
    },
    name: {
      type: String,
      default: "contact name not found",
    },
    email: {
      type: String,
      default: "contact email not found",
    },
  },
};
</script>

<style lang="scss" module>
.link {
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
}

.name {
  margin-bottom: 0px;
}

.email {
  margin-top: 0px;
}
</style>
