<template>
</template>

<script>
export default {
  async asyncData({ store, params, redirect }) {  
      try { 
        return await redirect('/contacts');
      } catch(e) {
        // error(e);
      }

      return {};
  }
}
</script>

<style>
</style>
