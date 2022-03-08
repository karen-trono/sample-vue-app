<template>
  <div class="form-password-wrapper">
    <label 
      class="form-password-label"
      :class="{ 'required': isRequired }"
    >
      {{inputLabel}}
    </label>
    <input 
      type="password"
      class="form-password"
      :class="{ 'disabled' : isDisabled}"
      :required="isRequired"
      :value="modelValue"
      @input="getValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputLabel: {
      type: String,
      default: 'Label',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String
    }
  },
  methods: {
    getValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>

<style>
.form-password {
  width: 400px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 10px 0;
  font-size: 16px;
  color: #333;
  padding: 10px;
}

.form-password:focus {
  outline-color: #f271a1;
}

.form-password.disabled {
  pointer-events: none;
  background-color: #f0ebf4;
}

.form-password-label {
  width: 400px;
  display: block;
  line-height: 1;
  color: #333;
  font-size: 16px;
  display: inline-block;
}

.form-password-label.required::before {
  content: '* ';
  color: #f271a1;
}
</style>