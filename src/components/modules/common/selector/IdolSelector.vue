<template>
  <div class="pIdol-selector">
    <v-card
      :class="['pIdol-box', { selected: selectedPIdol }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedPIdol"
        :src="`${baseImageURL}/episodes/episode_${selectedPIdol.id}.webp`"
        class="pIdol-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <div class="pIdol-details">
      <div class="episode-name">{{ selectedPIdol?.episode_name ?? '' }}</div>
      <div class="pIdol-name">{{ selectedPIdol?.name ?? '' }}</div>
    </div>

    <v-dialog v-model="dialog" scrollable max-width="800px">
      <v-card>
        <v-card-title>キャラクターを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-1">
          <div class="item-grid">
            <div
              v-for="item in availablePIdolList"
              :key="item.id"
              class="item-container"
              @click="selectpIdol(item)"
            >
              <div class="item-image-wrapper">
                <v-tooltip location="top">
                  <template v-slot:activator="{ props }">
                    <v-img
                      v-bind="props"
                      :src="`${baseImageURL}/episodes/episode_${item.id}.webp`"
                      cover
                    ></v-img>
                  </template>
                  <p>[{{ item.episode_name }}]</p>
                  <p>{{ item.name }}</p>
                </v-tooltip>
              </div>
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
import { ref, watch, onMounted } from 'vue';
import { baseImageURL } from '@/components/store/constant.js';
import {
  contestPlan,
  selectedPIdol,
  sameSelectedPIdols as selectedPIdolEpisodes,
  pIdolCharacterMap,
  pIdolList,
} from '@/components/store/store.js';

const availablePIdolList = ref([]);
onMounted(() => {
  const selectedPIdolWatch = () => {
    if (selectedPIdol.value) {
      selectedPIdolEpisodes.value = pIdolCharacterMap.get(
        selectedPIdol.value.character_id
      );
    }
  };
  watch(selectedPIdol, selectedPIdolWatch);
  selectedPIdolWatch();

  const contestPlanWatch = () => {
    // コンテストプランとアイドルプランが一致しないなら選択を外す
    if (
      contestPlan.value != 'free' &&
      contestPlan.value != selectedPIdol.value?.plan
    ) {
      selectedPIdol.value = null;
    }
    // コンテストプランによって選択できるキャラクターを制限する
    if (contestPlan.value == 'free') {
      availablePIdolList.value = pIdolList;
    } else {
      availablePIdolList.value = pIdolList.filter(
        (v) => v.plan == contestPlan.value
      );
    }
  };
  watch(contestPlan, contestPlanWatch);
  contestPlanWatch();
});

const dialog = ref(false);

const selectpIdol = (pIdol) => {
  selectedPIdol.value = pIdol;
  dialog.value = false;
};
</script>

<style scoped>
.pIdol-selector {
  display: flex;
  align-items: center;
  width: 100%;
}

.pIdol-box {
  width: 80px;
  height: 80px;
  border: solid 2px #999;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pIdol-box.selected {
  border: none;
}

.pIdol-image {
  width: 100%;
  height: 100%;
}

.placeholder-icon {
  font-size: 32px;
}

.pIdol-details {
  padding-left: 16px;
  width: calc(100% - 80px);
  text-align: left;
}

.episode-name {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: left;
}

.pIdol-name {
  font-size: 1.1rem;
  text-align: left;
}

.item-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}

.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.item-container:hover {
  transform: scale(1.08);
  opacity: 0.5;
}

.item-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.item-image-wrapper :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
