<template>
  <v-dialog v-model="dialog" scrollable width="100%" max-width="600px">
    <v-card>
      <v-card-title>Pアイテムを選択</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="card-grid">
          <div v-if="autoSelect != true" class="card-container" @click="select(null)">
            <v-icon class="card-option placeholder-icon unselected-container">mdi-plus</v-icon>
          </div>
          <div
            v-for="(item, index) in itemList"
            :key="item.id"
            :class="['card-container', { hover: hoveredIndex == index }]"
            @click="select(item)"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
          >
            <v-img
              :src="`${baseImageURL}/pItems/pItem_${item.id}.webp`"
              class="card-option"
              contain
            ></v-img>
            <v-tooltip
              :model-value="true"
              activator="parent"
              location="top"
              v-if="hoveredIndex === index"
            >
              <PItemDescription :entity="item" />
            </v-tooltip>
          </div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">閉じる</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { baseImageURL } from '@/store/constant.js';
import PItemDescription from '../description/PItemDescription.vue';
const selectedItem = defineModel('selectedItem');
const dialog = defineModel('dialog');
const hoveredIndex = ref(null);
const { itemList, autoSelect } = defineProps({
  itemList: {
    type: Array,
    require: true,
  },
  autoSelect: {
    type: Boolean,
  },
});

const select = (item) => {
  selectedItem.value = item;
  dialog.value = false;
};
</script>

<style scoped>
.v-tooltip :deep(.v-overlay__content) {
  background-color: rgba(250, 250, 250, 0.9) !important;
  border: solid 1px black;
  color: black;
}

.card-box {
  width: 100%;
  aspect-ratio: 1;
  border: solid 2px #999;
  border-radius: 6px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.card-box.selected {
  border: none;
}

.disable {
  background-color: black;
}
.disable .v-img {
  opacity: 0.5;
}

.card-image {
  width: 100%;
  height: 100%;
}

.placeholder-icon {
  font-size: 32px;
}

.unselected-container {
  border: solid 2px #999;
  border-radius: 5px;
}

.card-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 60px;
  height: 60px;
}

.card-container.hover {
  transform: scale(1.08);
  opacity: 0.5;
}

.card-option {
  width: 100%;
  height: 100%;
}
</style>
