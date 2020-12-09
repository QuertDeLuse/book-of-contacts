<template>
  <div :class="$style.ContactLink">
    <nuxt-link :to="`contacts/${to}`" class="Contact" :class="$style.link">
      <h3 :class="$style.name">{{ name }}</h3>
      <p :class="$style.phoneNumber">{{ phoneNumber }}</p>
    </nuxt-link>
    <Button @click="click" :type="'delete'" :name="'remove'" />
    <!-- <button @click.prevent="click">Remove</button> -->
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  props: {
    to: {
      type: Number,
      default: "",
    },
    name: {
      type: String,
      default: "contact name not found",
    },
    phoneNumber: {
      type: String,
      default: "contact phone number not found",
    },
  },

  methods: {
    click() {
      this.$emit("click", this.$event);
    },
  },
};
</script>

<style lang="scss" module>
.ContactLink {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px;

  &:hover {
    .link {
      text-decoration: underline;
    }
    background-color: rgba(gray, 0.1);
  }
}

.link {
  text-decoration: none;
  color: #000;
}

.name {
  margin: 0px;
}

.phoneNumber {
  margin: 0px;
}
</style>

<style lang="scss">
.nuxt-link-active {
  color: red;
  text-decoration: underline;
}
</style>
