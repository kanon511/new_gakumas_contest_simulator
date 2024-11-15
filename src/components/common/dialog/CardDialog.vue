<template>
  <v-dialog v-model="dialog" scrollable width="100%" max-width="800px">
    <v-card>
      <v-card-title>カードを選択</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <RecycleScroller
          ref="scroller"
          class="scroller"
          :items="usedItemList"
          :item-size="itemSize"
          :grid-items="gridItems"
          :item-secondary-size="itemSecondarySize"
          :style="{ width: scrollerWidth + 'px' }"
        >
          <template #default="{ item, index }">
            <div v-if="item.id == -1" class="item-container" @click="select(null)">
              <div>
                <v-icon class="item-option placeholder-icon unselected-container">mdi-plus</v-icon>
              </div>
            </div>
            <div
              v-else
              :key="item.id"
              :class="['item-container', { hover: hoveredIndex == index }]"
              @click="select(item)"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
              @touchstart="hoveredIndex = index"
              @touchmove="hoveredIndex = index"
              @touchend="hoveredIndex = null"
            >
              <v-img
                :src="`${baseImageURL}/cards/card_${item.id}.webp`"
                class="item-option"
                contain
              ></v-img>
              <v-tooltip
                :model-value="true"
                activator="parent"
                location="top"
                v-if="hoveredIndex === index"
              >
                <CardDescription :card="item" />
              </v-tooltip>
            </div>
          </template>
        </RecycleScroller>
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
import { ref, watch, onMounted, computed } from 'vue';
import { baseImageURL } from '@/store/constant.js';
import { RecycleScroller } from 'vue-virtual-scroller';
import CardDescription from '../description/CardDescription.vue';
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
const usedItemList = computed(() => {
  return autoSelect ? itemList : [{ id: -1 }].concat(itemList);
});
const itemSize = ref(90);
const itemSecondarySize = ref(90);
const gridItems = ref(4);
const scrollerWidth = ref(720);
const updateGridSettings = () => {
  const width = window.innerWidth;
  if (width < 400) {
    // sp
    gridItems.value = Math.floor((width - 16) / 80);
    itemSize.value = 80;
    itemSecondarySize.value = 80;
  } else if (width < 500) {
    // sp
    gridItems.value = Math.floor((width - 24) / 90);
    itemSize.value = 90;
    itemSecondarySize.value = 90;
  } else if (width < 800) {
    gridItems.value = Math.floor((width - 40) / 90);
    itemSize.value = 90;
    itemSecondarySize.value = 90;
  } else {
    // 最大
    gridItems.value = 8;
    itemSize.value = 90;
    itemSecondarySize.value = 90;
  }
  scrollerWidth.value = gridItems.value * itemSecondarySize.value;
};

// ウィンドウリサイズ時に設定を更新
window.addEventListener('resize', updateGridSettings);
onMounted(updateGridSettings);
const select = (item) => {
  selectedItem.value = item;
  dialog.value = false;
};
</script>

<style scoped>
.scroller {
  margin: 0 auto;
}
.v-tooltip :deep(.v-overlay__content) {
  background-color: rgba(250, 250, 250, 0.9) !important;
  border: solid 1px black;
  color: black;
}
.placeholder-icon {
  font-size: 32px;
}

.unselected-container {
  border: solid 2px #999;
  border-radius: 5px;
}

.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
}

.item-container.hover {
  transform: scale(1.08);
  opacity: 0.5;
}

.item-option {
  width: 75px;
  height: 75px;
}

@media screen and (max-width: 400px) {
  .item-option {
    width: 70px;
    height: 70px;
  }
}
</style>
