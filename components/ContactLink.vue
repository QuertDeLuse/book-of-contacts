<template>
  <div :class="$style.ContactLink">
    <nuxt-link :to="`contacts/${to}`" class="Contact" :class="$style.link">
      <h3 :class="$style.name">{{ name }}</h3>
      <p :class="$style.email">{{ email }}</p>
    </nuxt-link>
    <button @click.prevent="click">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: Number,
      default: "",
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

  methods: {
    click() {
      this.$emit("click", this.$event);
    },
  },
};
</script>


<style lang="scss" module>
.ContactLink {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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
  margin: 0px;
}
</style>

<style lang="scss">
.nuxt-link-active {
  color: red;
  text-decoration: underline;
}
</style>