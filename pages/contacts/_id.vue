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
        <Button :type="'delete'" :name="'remove'" @click="removeProperty(name)" />
      </li>
    </ul>

    <div :class="$style.btnGroup">
      <Button :type="'add'" :name="'Add contact property'" @click="addProperty()" />
      <Button :type="'add'" :name="'<- Step Back'" @click="stepBack()" />
    </div>

    <Modal @submit="addPropSubmit" @cancel="addPropCancel" v-if="addPropModalShow">
      <input
        v-model="propertyName"
        type="name"
        name="name"
        placeholder="property name"
        required
      />
      /
      <input
        v-model="propertyValue"
        type="value"
        name="value"
        placeholder="property value"
        required
      />
    </Modal>

    <Modal @submit="deleteSubmit" @cancel="deleteCancel" v-if="confirmModalShow">
      <h3>Are you sure?</h3>
    </Modal>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      addPropModalShow: false,
      confirmModalShow: false,
      propertyName: "",
      propertyValue: "",
      propertyNameForDeletion: "",
    };
  },

  methods: {
    deleteSubmit() {
      this.$store.dispatch("removeProperty", {
        id: this.contactData.id,
        name: this.propertyNameForDeletion,
      });
      this.confirmModalShow = !this.confirmModalShow;
      this.propertyNameForDeletion = "";
    },
    deleteCancel() {
      this.confirmModalShow = !this.confirmModalShow;
    },

    addPropSubmit() {
      this.$store.dispatch("addProperty", {
        id: this.contactData.id,
        name: this.propertyName,
        value: this.propertyValue,
      });
      this.addPropModalShow = !this.addPropModalShow;
      this.propertyName = "";
      this.propertyValue = "";
    },
    addPropCancel() {
      this.addPropModalShow = !this.addPropModalShow;
    },

    addProperty() {
      this.addPropModalShow = !this.addPropModalShow;
    },
    removeProperty(name) {
      if (name == "id") {
        alert("It is impossible to delete id");
      } else {
        this.propertyNameForDeletion = name;
        this.confirmModalShow = !this.confirmModalShow;
      }
    },

    stepBack() {
      this.$store.dispatch('returnStepBack')
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

.btnGroup {
  display: flex;
  justify-content: space-between;
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
