<template>
  <div>
    <v-card
      :class="[
        'card-box',
        { selected: selectedCard },
        { disable: !availableSelectedCard },
      ]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedCard"
        :src="`${baseImageURL}/cards/card_${selectedCard.id}.webp`"
        class="card-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <v-dialog v-model="dialog" scrollable max-width="800px">
      <v-card>
        <v-card-title>カードを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="card-grid">
            <div
              v-if="autoSelect != 'true'"
              class="card-container"
              @click="selectCard(null)"
            >
              <v-icon class="card-option placeholder-icon unselected-container"
                >mdi-plus</v-icon
              >
            </div>
            <div
              v-for="item in props.cardList"
              :key="item.id"
              class="card-container"
              @click="selectCard(item)"
            >
              <v-img
                :src="`${baseImageURL}/cards/card_${item.id}.webp`"
                class="card-option"
                contain
              ></v-img>
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
  availableSelectedCard: {
    type: Boolean,
  },
  autoSelect: {
    type: String,
  },
  cardList: {
    type: Array,
    require: true,
  },
});

const selectedCard = defineModel('selectedCard');

const dialog = ref(false);

onMounted(() => {
  const cardListWatch = () => {
    if (selectedCard.value) {
      if (!props.cardList.some((item) => selectedCard.value.id == item.id)) {
        selectedCard.value = null;
      } else {
        return;
      }
    }
    if (
      props.autoSelect == 'true' &&
      props.cardList &&
      props.cardList.length > 0
    ) {
      selectedCard.value = props.cardList[props.cardList.length > 1 ? 1 : 0];
    }
  };
  watch(() => props.cardList, cardListWatch);
  cardListWatch();
});

const selectCard = (card) => {
  selectedCard.value = card;
  dialog.value = false;
};
</script>

<style scoped>
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
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}

.card-container:hover {
  transform: scale(1.08);
  opacity: 0.5;
}

.card-option {
  width: 80px;
  height: 80px;
}
</style>
