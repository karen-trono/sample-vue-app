<template>
  <button 
    class="button-primary"
    :class="{ 'disabled' : isDisabled}"
    :value="buttonText"
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
  }
}
</script>

<style>
.button-primary {
  padding: 10px;
  height: 50px;
  min-width: 200px;
  width: auto;
  background-color: #f271a1;
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.3s;
}

.button-primary:hover {
  background-color: #e64298; 
}

.button-primary:not(:last-child) {
  margin-right: 10px;
}

.button-primary.disabled {
  pointer-events: none;
  background-color: #f0ebf4;
}
</style>