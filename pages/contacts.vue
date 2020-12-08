<template>
  <div class="container" :class="$style.container">
    <aside :class="$style.aside">
      <nav>
        <h1 :class="$style.title">Contacts</h1>
        <ul>
          <li v-for="contact in contacts" :key="contact.id">
            <ContactLink
              :to="contact.id"
              :name="contact.name"
              :email="contact.email"
              @click="removeContact(contact.id)"
            />
          </li>
        </ul>
      </nav>
      <AddContactBtn @click="addNewContact"/>
    </aside>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import ContactLink from "@/components/ContactLink";
import AddContactBtn from "@/components/AddContactBtn"

export default { 

  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },

  methods: {
    removeContact(id) {
      this.$store.dispatch("removeContact", id);
    },
    addNewContact() {
      this.$store.dispatch("addNewContact");
    },
  },
};
</script>

<style lang="scss" module>
.container {
  display: flex;
}

.aside {
  width: 40%;
  padding: 20px;
}

.title {
  margin: 0;
}
</style>
