<template>
  <div>
    <v-card
      :class="['card-box', { selected: selectedCard }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedCard"
        :src="`${selectedCard.image}`"
        class="card-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>カードを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="card-grid">
            <div
              v-for="card in cardList"
              :key="card.id"
              class="card-container"
              @click="selectCard(card)"
            >
              <v-img :src="`${card.image}`" class="card-option" contain></v-img>
              <div class="card-name">{{ card.name }}</div>
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
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  cardList: {
    type: Array,
    required: true,
  },
});

const dialog = ref(false);
const selectedCard = ref(null);

const selectCard = (card) => {
  selectedCard.value = card;
  dialog.value = false;
};
</script>

<style scoped>
.card-box {
  width: 70px;
  height: 70px;
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

.card-image {
  width: 100%;
  height: 100%;
}

.placeholder-icon {
  font-size: 32px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 8px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.card-option {
  width: 100px;
  height: 100px;
}

.card-name {
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100px; /* card-optionと同じ幅 */
}
</style>
