<template>
  <button 
    class="button-cancel"
    :class="{ 'disabled' : isDisabled}"
    :urlPath="urlPath"
    @click="goToLink"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Button',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    urlPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    goToLink() {
      this.$router.push('/' + this.urlPath);
    }
  }
}
</script>

<style>
.button-cancel {
  padding: 10px;
  height: 50px;
  min-width: 200px;
  width: auto;
  background-color: #a1c2d1;
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.3s;
}

.button-cancel:hover {
  background-color: #b39bc8; 
}

.button-cancel:not(:last-child) {
  margin-right: 10px;
}

.button-cancel.disabled {
  pointer-events: none;
  background-color: #f0ebf4;
}
</style>