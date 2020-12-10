<template>
  <div class="container" :class="$style.container">
    <aside :class="$style.aside">
      <h1 :class="$style.title">Contacts</h1>
      <nav>
        <ul>
          <li v-for="contact in contacts" :key="contact.id">
            <ContactLink
              :to="contact.id"
              :name="contact.name"
              :phoneNumber="contact.phoneNumber"
              @click="removeContact(contact.id)"
            />
          </li>
        </ul>
      </nav>
      <Button :type="'add'" :name="'Add contact'" @click="addContact" />
      <Modal @submit="deleteSubmit" @cancel="deleteCancel" v-if="confirmModalShow">
        <h3>Are you sure?</h3>
      </Modal>
    </aside>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import ContactLink from "@/components/ContactLink";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      confirmModalShow: false,
      selectedContactId: -1,
    }
  },

  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },

  methods: {
    deleteSubmit() {
      this.$store.dispatch("removeContact", this.selectedContactId);
       this.confirmModalShow = !this.confirmModalShow;
    },
    deleteCancel() {
      this.confirmModalShow = !this.confirmModalShow;
    },
    removeContact(id) {
      this.selectedContactId = id;
      this.confirmModalShow = !this.confirmModalShow;
    },
    addContact() {
      this.$store.dispatch("addContact");
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
