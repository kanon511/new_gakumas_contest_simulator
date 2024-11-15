<template>
  <div class="title">{{ entity.name }}</div>
  <div>{{ content.trigger }}</div>
  <div v-if="content.condition">{{ content.condition }}なら</div>
  <div v-for="effect in content.effects">・{{ effect }}</div>
  <div class="sub-information-box">
    <div>レッスン中{{ `${entity.limit < 0 ? '∞' : entity.limit}` }}回</div>
  </div>
  <div class="card-classification">
    <div>{{ content.plan }}</div>
    <div v-if="String(entity.id)[0] == '2'">固有</div>
    <div v-else-if="String(entity.id)[0] == '4'">コンテスト</div>
  </div>
</template>
<script setup>
import EntityTranslator from '#/utils/EntityTranslator.js';
import { computed } from 'vue';

const { entity } = defineProps(['entity']);

const content = computed(() => {
  // console.log(entity);
  return EntityTranslator.translate(entity);
});

// const condition = computed(() => {
//   console.log(
//     content.value.condition.replaceAll(
//       '好調',
//       `<img src="https://katabami83.github.io/gakumas_file/images/icons/icon_free.png" style="height: 1em; vertical-align: middle;" alt="icon" /> 好調`
//     )
//   );
//   return content.value.condition.replaceAll(
//     '好調',
//     `<img src="https://katabami83.github.io/gakumas_file/images/icons/icon_free.png" style="height: 1em; vertical-align: text-top;"  alt="icon" /> 好調`
//   );
// });
</script>

<style scoped>
.card-classification {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75em;
  margin: auto;
  justify-content: center;
}
.card-classification div:not(:last-of-type)::after {
  content: '/';
  color: #777; /* 記号の色 */
  margin: 0 0.1em;
}

.title {
  font-weight: bold;
  font-size: 1.1em;
}
.sub-information-box {
  margin-top: 2px;
  color: #0d47a1;
  font-size: 0.85em;
}
</style>
