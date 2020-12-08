<template>
  <div>contacts</div>
</template>

<script>
export default {
  async asyncData({ store, redirect }) {
    try {
      return await redirect("/contacts/" + store.state.contacts[0].id);
    } catch (e) {}
    return {}
  },
};
</script>

<style></style>
