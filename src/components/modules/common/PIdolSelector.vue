<template>
  <div class="pIdol-selector">
    <v-card
      :class="['pIdol-box', { selected: selectedPIdol }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedPIdol"
        :src="`public/images/episodes/episode_${selectedPIdol.id}.webp`"
        class="pIdol-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <div class="pIdol-details">
      <div class="episode-name">
        {{ selectedPIdol?.episode_name ?? "" }}
      </div>
      <div class="pIdol-name">
        {{ selectedPIdol?.name ?? "" }}
      </div>
    </div>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>キャラクターを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-1">
          <!-- <div class="pIdol-list-grid">
            <div
              v-for="pIdol in availablePIdolList"
              :key="pIdol.id"
              class="pIdol-list-container"
              @click="selectpIdol(pIdol)"
            >
              <v-img
                :src="`public/images/episodes/episode_${pIdol.id}.webp`"
                class="pIdol-list-image"
                contain
              ></v-img>
              <div class="pIdol-list-details">
                <div class="pIdol-list-episode-name">
                  {{ pIdol.episode_name }}
                </div>
              </div>
            </div>
          </div> -->
          <div class="item-grid">
            <div
              v-for="item in availablePIdolList"
              :key="item.id"
              class="item-container"
              @click="selectpIdol(item)"
            >
              <div class="item-image-wrapper">
                <v-img
                  :src="`public/images/episodes/episode_${item.id}.webp`"
                  cover
                ></v-img>
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
import { ref, watch, defineModel, defineProps, onMounted } from "vue";
import { PIdolData } from "@/simulator/data/pIdolData";

const props = defineProps({
  contestPlan: {
    type: String,
    require: true,
  },
});
const selectedPIdol = defineModel("selectedPIdol");
const sameSelectedPIdols = defineModel("sameSelectedPIdols");
const pIdolList = PIdolData.getAll();
const pIdolMap = pIdolList.reduce((map, item) => {
  map.set(item.id, item);
  return map;
}, new Map());
const availablePIdolList = ref([]);

watch(selectedPIdol, () => {
  if (selectedPIdol.value) {
    sameSelectedPIdols.value = PIdolData.getByCharacterId(
      selectedPIdol.value.character_id
    );
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("p_idol", `${selectedPIdol.value.id}`);
    window.history.replaceState(null, null, "?" + urlParams.toString());
  }
});

//これだとCompositionBuilder.vueのsamePIdolCardIdsのcomputedが働かない
// sameSelectedPIdols.value = computed(() => {
//   console.log("samesame");
//   if (selectedPIdol.value) {
//     return PIdolData.getByCharacterId(selectedPIdol.value.character_id);
//   }
//   return [];
// });

watch(
  () => props.contestPlan,
  (contestPlan) => {
    // コンテストプランとアイドルプランが一致しないなら選択を外す
    if (contestPlan != "free" && contestPlan != selectedPIdol.value?.plan) {
      selectedPIdol.value = null;
    }
    // コンテストプランによって選択できるキャラクターを制限する
    if (contestPlan == "free") {
      availablePIdolList.value = pIdolList;
    } else {
      availablePIdolList.value = pIdolList.filter((v) => v.plan == contestPlan);
    }
  }
);

const dialog = ref(false);

const selectpIdol = (pIdol) => {
  selectedPIdol.value = pIdol;
  dialog.value = false;
};
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const pIdolIds = urlParams.get("p_idol");
  if (pIdolIds) {
    const [pIdolId] = pIdolIds.split(":").map(Number);
    if (pIdolMap.has(pIdolId)) {
      selectedPIdol.value = pIdolMap.get(pIdolId);
    }
  }
});
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

/* .pIdol-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}

.pIdol-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
}

.pIdol-list-image {
  width: 100px;
  height: 100px;
}

.pIdol-list-details {
  width: 100%;
  overflow: hidden;
}

.pIdol-list-episode-name {
  font-size: 0.75rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pIdol-list-name {
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
} */
.item-grid {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
  gap: 16px;
  /* padding: 16px; */
}

@media (max-width: 600px) {
  .item-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .item-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 961px) {
  .item-grid {
    grid-template-columns: repeat(8, 1fr);
  }
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
  transform: scale(1.05);
}

.item-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #ccc; */
  overflow: hidden;
}

.item-image-wrapper :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
