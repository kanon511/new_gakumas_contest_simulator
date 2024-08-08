<template>
  <div>
    <v-card
      :class="['pItem-box', { selected: selectedPItem }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedPItem"
        :src="`public/images/pItems/pItem_${selectedPItem.id}.webp`"
        class="pItem-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>Pアイテムを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="pItem-grid">
            <div
              v-for="pItem in pItemList"
              :key="pItem.id"
              class="pItem-container"
              @click="selectpItem(pItem)"
            >
              <v-img
                :src="`public/images/pItems/pItem_${pItem.id}.webp`"
                class="pItem-option"
                contain
              ></v-img>
              <!-- <div class="pItem-name">{{ pItem.name }}</div> -->
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
import { ref, defineModel, defineProps, watch } from "vue";

const pItemList = defineModel("pItemList");
const props = defineProps(["autoSelect"]);
const selectedPItem = defineModel("selectedPItem");

const dialog = ref(false);

watch(pItemList, () => {
  if (props.autoSelect == "true") {
    selectedPItem.value = pItemList.value[0];
  }
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

.pItem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 8px;
}

.pItem-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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
  max-width: 60px; /* pItem-optionと同じ幅 */
}
</style>
