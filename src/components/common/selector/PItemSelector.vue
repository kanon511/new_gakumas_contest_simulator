<template>
  <div>
    <v-card
      :class="['pItem-box', { selected: selectedPItem }]"
      variant="text"
      @click="dialog = true"
    >
      <v-tooltip v-if="selectedPItem" location="top">
        <template v-slot:activator="{ props }">
          <v-img
            v-bind="props"
            :src="`${baseImageURL}/pItems/pItem_${selectedPItem.id}.webp`"
            class="pItem-image"
            contain
          ></v-img>
        </template>
        <PItemDescription :entity="selectedPItem" />
      </v-tooltip>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>
    <PItemDialog
      :autoSelect="autoSelect"
      :itemList="pItemList"
      v-model:selectedItem="selectedPItem"
      v-model:dialog="dialog"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { baseImageURL } from '@/store/constant.js';
import PItemDescription from '../description/PItemDescription.vue';
import PItemDialog from '../dialog/PItemDialog.vue';

const props = defineProps({
  autoSelect: {
    type: Boolean,
  },
  pItemList: {
    type: Array,
    require: true,
  },
});
const selectedPItem = defineModel('selectedPItem');

const dialog = ref(false);

onMounted(() => {
  const pItemListWatch = () => {
    if (selectedPItem.value) {
      if (!props.pItemList.some((item) => selectedPItem.value.id == item.id)) {
        selectedPItem.value = null;
      } else {
        return;
      }
    }
    if (props.autoSelect && props.pItemList && props.pItemList.length > 0) {
      selectedPItem.value = props.pItemList[0];
    }
  };
  watch(() => props.pItemList, pItemListWatch);
  pItemListWatch();
});

const selectpItem = (pItem) => {
  selectedPItem.value = pItem;
  dialog.value = false;
};
</script>

<style scoped>
.v-tooltip :deep(.v-overlay__content) {
  background-color: rgba(250, 250, 250, 0.9) !important;
  border: solid 1px black;
  color: black;
}

.pItem-box {
  width: 60px;
  height: 60px;
  border: solid 2px #999;
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pItem-box.selected {
  border: none;
}

.pItem-image {
  width: 100%;
  height: 100%;
}

.pItem-image :deep(.v-img__img) {
  pointer-events: none;
}

.placeholder-icon {
  font-size: 32px;
}

.unselected-container {
  border: solid 2px #999;
  border-radius: 5px;
}

.pItem-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
}

.pItem-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}

.pItem-container:hover {
  transform: scale(1.08);
  opacity: 0.5;
}

.pItem-name {
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 60px;
}
</style>
