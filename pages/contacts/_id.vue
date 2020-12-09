<template>
  <div :class="$style.Contact">
    <h2 :class="$style.title">Contact Information</h2>
    <ul :class="$style.propertyList">
      <li
        v-for="(property, name) in contactData"
        :key="property.id"
        :class="$style.property"
      >
        {{ name + " : " + property }}
        <Button
          :type="'delete'"
          :name="'remove'"
          @click="removeProperty(contactData.id, name)"
        />
      </li>
    </ul>
    <Button
      :type="'add'"
      :name="'Add contact property'"
      @click="addProperty(contactData.id)"
    />
    <Modal @submit="submit" @cancel="cancel" v-if="modalShow">
      <input type="name" name="name" placeholder="property name" /> /
      <input type="value" name="value" placeholder="property value" />
    </Modal>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      modalShow: false,
    };
  },

  methods: {
    submit() {},

    cancel() {
      this.modalShow = !this.modalShow;
    },

    addProperty(contactId) {
      this.modalShow = !this.modalShow;

      // this.$store.dispatch("addProperty", { id: contactId });
    },
    removeProperty(contactId, propertyName) {
      // this.$store.dispatch("removeProperty", { id: contactId, name: propertyName });
    },
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

  border-left: 1px solid rgba(gray, 0.3);
}

.title {
  margin: 0;
}

.propertyList {
  list-style: none;
  padding: 0;
}

.property {
  display: flex;
  justify-content: space-between;

  padding: 4px;

  &:hover {
    background-color: rgba(gray, 0.1);
  }
}

.deletePropBtn {
  cursor: pointer;
}
</style>
