<template>
  <div>
    <v-card
      :class="['card-box', { selected: selectedCard }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedCard"
        :src="`/images/cards/card_${selectedCard.id}.webp`"
        class="card-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <v-dialog v-model="dialog" scrollable max-width="800px">
      <v-card>
        <v-card-title>カードを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-1">
          <!-- <div class="card-grid">
            <div
              v-if="autoSelect != 'true'"
              class="card-container"
              @click="unselectCard(card)"
            >
              <v-icon class="card-option placeholder-icon unselected-container"
                >mdi-plus</v-icon
              >
              <div class="card-name">カードを削除</div>
            </div>
            <div
              v-for="card in props.cardList"
              :key="card.id"
              class="card-container"
              @click="selectCard(card)"
            >
              <v-img
                :src="`public/images/cards/card_${card.id}.webp`"
                class="card-option"
                contain
              ></v-img>
              <div class="card-name">{{ card.name }}</div>
            </div>
          </div> -->
          <v-container>
            <v-row>
              <v-col
                v-if="autoSelect != 'true'"
                cols="3"
                sm="2"
                md="2"
                class="pa-1"
              >
                <div
                  class="item-container d-flex flex-column align-center"
                  @click="selectCard(null)"
                >
                  <div
                    class="item-image-wrapper d-flex justify-center align-center"
                    style="width: 100%; aspect-ratio: 1; border: 1px solid #ccc"
                  >
                    <v-icon size="36" color="grey">mdi-plus</v-icon>
                  </div>
                  <!-- <div class="item-name text-center mt-2">空欄</div> -->
                </div>
              </v-col>
              <v-col
                v-for="item in props.cardList"
                :key="item.id"
                cols="3"
                sm="2"
                md="2"
                class="pa-1"
              >
                <div
                  class="item-container d-flex flex-column align-center"
                  @click="selectCard(item)"
                >
                  <div
                    class="item-image-wrapper d-flex justify-center align-center"
                    style="width: 100%; aspect-ratio: 1"
                  >
                    <v-img
                      :src="`/images/cards/card_${item.id}.webp`"
                      cover
                      width="100%"
                      height="100%"
                    ></v-img>
                  </div>
                  <!-- <div class="item-name text-center mt-2">
                    {{ item.name }}
                  </div> -->
                </div>
              </v-col>
            </v-row>
          </v-container>
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
import { ref, defineModel, watch } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  autoSelect: {
    type: String,
  },
  cardList: {
    type: Array,
    require: true,
  },
});

const selectedCard = defineModel("selectedCard");

const dialog = ref(false);

watch(
  () => props.cardList,
  (cardList) => {
    // console.log("cardList", cardList, "selected", selectedCard.value);
    if (selectedCard.value) {
      if (!cardList.some((item) => selectedCard.value.id == item.id)) {
        selectedCard.value = null;
      } else {
        return;
      }
    }

    if (props.autoSelect == "true" && cardList && cardList.length > 0) {
      selectedCard.value = cardList[0];
    }
  }
);

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
.placeholder-icon {
  font-size: 32px;
}
.card-image {
  width: 100%;
  height: 100%;
}
/*

.unselected-container {
  border: solid 2px #999;
  border-radius: 5px;
  width: calc(100% / 6);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.card-option {
}

.card-name {
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 100%;
} */

.item-container {
  cursor: pointer;
  height: 100%;
  transition: all 0.3s;
}

/* .item-container:hover {
  transform: scale(1.05);
} */

.item-name {
  font-size: 0.9rem;
  word-break: break-word;
}
</style>
