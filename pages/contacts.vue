<template>
  <div class="container" :class="$style.container">
    <aside :class="$style.aside">
      <nav>
        <h1>Contacts</h1>
        <ul>
          <li v-for="contact in contacts" :key="contact.id">
              <ContactLink :to="contact.id" :name="contact.name" :email="contact.email"/>
          </li>
        </ul>
      </nav>
    </aside>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import ContactLink from '@/components/ContactLink';

export default {
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>

<style lang="scss" module>
.container {
    display: flex;
}

.aside {
    width: 30%;
}
</style>
