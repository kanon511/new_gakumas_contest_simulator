<template>
  <div class="parent">
    <div class="vocal" :style="`width: ${vocal}%;`">
      <div class="line"></div>
      <div>{{ vocal }}%</div>
    </div>
    <div class="dance" :style="`width: ${dance}%;`">
      <div class="line"></div>
      <div>{{ dance }}%</div>
    </div>
    <div class="visual" :style="`width: ${visual}%;`">
      <div class="line"></div>
      <div>{{ visual }}%</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['vocal', 'dance', 'visual']);
</script>

<style scoped>
.parent {
  width: calc(100% - 12px);
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  text-align: center;
  font-size: 12px;
}
.line {
  height: 4px;
  background-color: gray;
}
.vocal {
  color: #b71c1c;
}
.vocal .line {
  background-color: #ff3366;
}
.dance {
  color: #0d47a1;
}
.dance .line {
  background-color: #0066ff;
}
.visual {
  color: #f57f17;
}
.visual .line {
  background-color: #ffcc00;
}
</style>
