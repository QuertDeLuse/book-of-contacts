<template>
  <div :class="$style.AddContactBtn">
    <button @click.prevent="click" :class="$style.btn">Add contact</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      return this.$emit('click', this.$event);
    },
  },
};
</script>

<style lang="scss" module>
.btn {
    
}
</style>
