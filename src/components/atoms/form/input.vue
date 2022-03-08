<template>
  <div class="form-input-wrapper">
    <label 
      class="form-input-label"
      :class="{ 'required': isRequired }"
    >
      {{inputLabel}}
    </label>
    <input 
      type="text"
      class="form-input"
      :class="{'disabled' : isDisabled, }"
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
.form-input {
  width: 400px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 10px 0;
  font-size: 16px;
  color: #333;
  padding: 10px;
}

.form-input:focus {
  outline-color: #f271a1;
}

.form-input.disabled {
  pointer-events: none;
  background-color: #f0ebf4;
}

.form-input.required::before {
  pointer-events: none;
  background-color: #f0ebf4;
}

.form-input-label {
  width: 400px;
  display: block;
  line-height: 1;
  color: #333;
  font-size: 16px;
  display: inline-block;
}

.form-input-label.required::before {
  content: '* ';
  color: #f271a1;
}
</style>