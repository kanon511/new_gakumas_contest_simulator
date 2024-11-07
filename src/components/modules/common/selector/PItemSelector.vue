<template>
  <div>
    <v-card
      :class="['pItem-box', { selected: selectedPItem }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedPItem"
        :src="`${baseImageURL}/pItems/pItem_${selectedPItem.id}.webp`"
        class="pItem-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <v-dialog v-model="dialog" scrollable max-width="600px">
      <v-card>
        <v-card-title>Pアイテムを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="pItem-grid">
            <div
              v-if="autoSelect != 'true'"
              class="pItem-container"
              @click="selectpItem(null)"
            >
              <v-icon class="pItem-option placeholder-icon unselected-container"
                >mdi-plus</v-icon
              >
            </div>
            <div
              v-for="pItem in props.pItemList"
              :key="pItem.id"
              class="pItem-container"
              @click="selectpItem(pItem)"
            >
              <v-tooltip location="top">
                <template v-slot:activator="{ props }">
                  <v-img
                    v-bind="props"
                    :src="`${baseImageURL}/pItems/pItem_${pItem.id}.webp`"
                    class="pItem-option"
                    contain
                  ></v-img>
                </template>
                <p>{{ pItem.name }}</p>
              </v-tooltip>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, defineModel, defineProps, watch, onMounted } from 'vue';
import { baseImageURL } from '@/components/store/constant.js';

const props = defineProps({
  autoSelect: {
    type: String,
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
    if (
      props.autoSelect == 'true' &&
      props.pItemList &&
      props.pItemList.length > 0
    ) {
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

.pItem-option {
  width: 60px;
  height: 60px;
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
