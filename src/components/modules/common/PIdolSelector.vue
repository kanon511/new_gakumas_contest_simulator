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
        <v-card-text>
          <div class="pIdol-list-grid">
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
                <!-- <div class="pIdol-list-name">{{ pIdol.name }}</div> -->
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
import { ref, watch, defineModel } from "vue";
import { PIdolData } from "@/simulator/data/pIdolData";

const contestPlan = defineModel("contestPlan");
const selectedPIdol = defineModel("selectedPIdol");
const pIdolList = PIdolData.getAll();
const availablePIdolList = ref([]);

watch(contestPlan, () => {
  // コンテストプランとアイドルプランが一致しないなら選択を外す
  if (
    contestPlan.value != "free" &&
    contestPlan.value != selectedPIdol.value?.plan
  ) {
    selectedPIdol.value = null;
  }
  // コンテストプランによって選択できるキャラクターを制限する
  if (contestPlan.value == "free") {
    availablePIdolList.value = pIdolList;
  } else {
    availablePIdolList.value = pIdolList.filter(
      (v) => v.plan == contestPlan.value
    );
  }
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

.pIdol-list-grid {
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
  /* height: 120px; */
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
  /* max-width: 100px; */
}
</style>
