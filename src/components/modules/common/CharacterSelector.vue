<template>
  <div class="character-selector">
    <v-card
      :class="['character-box', { selected: selectedCharacter }]"
      variant="text"
      @click="dialog = true"
    >
      <v-img
        v-if="selectedCharacter"
        :src="`public/images/episodes/episode_${selectedCharacter.id}.webp`"
        class="character-image"
        contain
      ></v-img>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>

    <div class="character-details">
      <div class="episode-name">
        {{ selectedCharacter?.episode_name ?? "" }}
      </div>
      <div class="character-name">
        {{ selectedCharacter?.name ?? "" }}
      </div>
    </div>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>キャラクターを選択</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="character-list-grid">
            <div
              v-for="character in availablePIdolList"
              :key="character.id"
              class="character-list-container"
              @click="selectCharacter(character)"
            >
              <v-img
                :src="`public/images/episodes/episode_${character.id}.webp`"
                class="character-list-image"
                contain
              ></v-img>
              <div class="character-list-details">
                <div class="character-list-episode-name">
                  {{ character.episode_name }}
                </div>
                <!-- <div class="character-list-name">{{ character.name }}</div> -->
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
import { ref, watch } from "vue";
import { PIdolData } from "@/simulator/data/pIdolData";

const plan = defineModel('plan');

const pIdolList = PIdolData.getAll();

const availablePIdolList = ref([]);

watch(plan, () => {
  console.log('planが変わりました', plan.value);
  if (plan.value == 'free') {
    availablePIdolList.value = pIdolList;
  } else {
    availablePIdolList.value = pIdolList.filter(v => v.plan == plan.value);
  }
});

const dialog = ref(false);
const selectedCharacter = ref(null);

const selectCharacter = (character) => {
  selectedCharacter.value = character;
  dialog.value = false;
};
</script>

<style scoped>
.character-selector {
  display: flex;
  align-items: center;
  width: 100%;
}

.character-box {
  width: 80px;
  height: 80px;
  border: solid 2px #999;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.character-box.selected {
  border: none;
}

.character-image {
  width: 100%;
  height: 100%;
}

.placeholder-icon {
  font-size: 32px;
}

.character-details {
  padding-left: 16px;
  width: calc(100% - 80px);
  text-align: left;
}

.episode-name {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: left;
}

.character-name {
  font-size: 1.1rem;
  text-align: left;
}

.character-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}

.character-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
  /* height: 120px; */
}

.character-list-image {
  width: 100px;
  height: 100px;
}

.character-list-details {
  width: 100%;
  overflow: hidden;
}

.character-list-episode-name {
  font-size: 0.75rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.character-list-name {
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  /* max-width: 100px; */
}
</style>
