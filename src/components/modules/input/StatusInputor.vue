<template>
  <v-text-field
    v-model.number="vocal"
    label="Vocal%"
    type="number"
    variant="underlined"
    hide-details
  >
    <template v-slot:prepend>
      <v-img
        src="images/icons/icon_vocal.png"
        max-width="24"
        max-height="24"
      ></v-img>
    </template>
  </v-text-field>

  <v-text-field
    v-model.number="dance"
    label="Dance%"
    type="number"
    variant="underlined"
    hide-details
  >
    <template v-slot:prepend>
      <v-img
        src="images/icons/icon_dance.png"
        max-width="24"
        max-height="24"
      ></v-img>
    </template>
  </v-text-field>

  <v-text-field
    v-model.number="visual"
    label="Visual%"
    type="number"
    variant="underlined"
    hide-details
  >
    <template v-slot:prepend>
      <v-img
        src="images/icons/icon_visual.png"
        max-width="24"
        max-height="24"
      ></v-img>
    </template>
  </v-text-field>

  <v-text-field
    v-model.number="hp"
    label="HP"
    type="number"
    variant="underlined"
    hide-details
  >
    <template v-slot:prepend>
      <v-img
        src="images/icons/icon_hp.png"
        max-width="24"
        max-height="24"
      ></v-img>
    </template>
  </v-text-field>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";

const vocal = ref(1000);
const dance = ref(1000);
const visual = ref(1000);
const hp = ref(40);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  if (status) {
    const [_vocal, _dance, _visual, _hp] = status.split(":");
    vocal.value = _vocal ?? 1000;
    dance.value = _dance ?? 1000;
    visual.value = _visual ?? 1000;
    hp.value = _hp ?? 40;
  }

  watchEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(
      "status",
      `${vocal.value}:${dance.value}:${visual.value}:${hp.value}`
    );
    window.history.replaceState(null, null, "?" + urlParams.toString());
  });
});
</script>

<style scoped></style>
