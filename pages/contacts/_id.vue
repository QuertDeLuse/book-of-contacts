<template>
  <div :class="$style.Contact">
    {{ contactData }}
  </div>
</template>

<script>
export default {
  asyncData({ store, params }) {
    try {
      // console.log(params.id)
    } catch {}

    return {}
  },

  computed: {
    contactData() {
      let id = this.$route.params.id;
      return this.$store.getters["getContactById"](id);
    },
  },
};
</script>

<style lang="scss" module>
.Contact {
  width: 60%;
  padding: 20px;
}
</style>
