<template>
  <v-text-field
    v-for="item in elementList"
    v-model.number="item.value"
    :label="item.label"
    type="number"
    variant="underlined"
    hide-details
  >
    <template v-slot:prepend>
      <v-img :src="item.src" width="24" height="24" />
    </template>
  </v-text-field>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";

const elementList = ref([
  {
    type: 'vocal',
    label: 'vocal%',
    src: `${__BASE_IMAGE_URL__}/icons/icon_vocal.png`,
    value: 1000,
  },
  {
    type: 'dance',
    label: 'dance%',
    src: `${__BASE_IMAGE_URL__}/icons/icon_dance.png`,
    value: 1000,
  },
  {
    type: 'visual',
    label: 'visual%',
    src: `${__BASE_IMAGE_URL__}/icons/icon_visual.png`,
    value: 1000,
  },
  {
    type: 'hp',
    label: 'HP',
    src: `${__BASE_IMAGE_URL__}/icons/icon_hp.png`,
    value: 40,
  },
]);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  if (status) {
    const queryStatus = status.split(':');
    for (let i = 0; i < elementList.value.length; i++) {
      const value = Number(queryStatus[i]);
      if (Number.isFinite(value)) {
        elementList.value[i].value = value;
      }
    }
  }
  watchEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("status", elementList.value.map(item => item.value).join(':'));
    window.history.replaceState(null, null, "?" + urlParams.toString());
  });
});
</script>

<style scoped></style>
