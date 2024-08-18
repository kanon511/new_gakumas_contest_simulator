<template>
  <div class="parent">
    <div class="vocal" :style="`width: ${vocal}%;`"></div>
    <div class="dance" :style="`width: ${dance}%;`"></div>
    <div class="visual" :style="`width: ${visual}%;`"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps(["vocal", "dance", "visual"]);
</script>

<style scoped>
.parent {
  width: calc(100% - 12px);
  height: 4px;
  margin: 0 auto;
  background-color: gray;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
}
.parent > * {
  height: 100%;
}
.vocal {
  background-color: #ff3366;
}
.dance {
  background-color: #0066ff;
}
.visual {
  background-color: #ffcc00;
}
</style>
