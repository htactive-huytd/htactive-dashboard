<template>
  <div>
    <v-alert type="error" v-model="alert" dismissible @input="onClose">{{text}}</v-alert>
  </div>
</template>

<script>
export default {
  props:['text'],
  data () {
      return {
        alert: true,
      }
    },
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>