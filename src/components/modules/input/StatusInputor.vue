<template>
  <v-text-field
    v-model.number="parameter.vocal"
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
    v-model.number="parameter.dance"
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
    v-model.number="parameter.visual"
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
    v-model.number="parameter.hp"
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
import { defineModel } from "vue";
const parameter = defineModel("parameter");
</script>

<style scoped></style>
