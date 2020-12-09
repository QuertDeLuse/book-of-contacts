<template>
  <div :class="$style.AddBtn">
    <button @click.prevent="click" :class="$style.btn">{{  type == 'add' ?  name : `&times;` }}</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'add',
    },
    name: {
      type: String,
      default: 'button'
    }
  },

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
