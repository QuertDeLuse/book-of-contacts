<template>
  <div :class="$style.Modal">
    <form @submit.prevent="submit" :class="$style.form">
      <slot :class="$style.content"></slot>

      <div :class="$style.btnGroup">
        <button type="submit">ok</button>
        <button @click.prevent="cancel" type="cancel">cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },

  methods: {
    submit() {
      this.$emit("submit", this.$event);
    },
    cancel() {
      this.$emit("cancel", this.$event);
    },
  },
};
</script>

<style lang="scss" module>
.Modal {
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  background-color: rgba(gray, 0.5);
}

.form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: auto;
  height: auto;

  padding: 30px 50px;

  background-color: #fff;
}

.content {
}

.btnGroup {
  display: flex;
  justify-content: flex-end;  
  margin-top: 20px;

  button {
    margin: 0 10px;
  }
}
</style>
