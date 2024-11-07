import { ref, watchEffect, computed, watch } from 'vue';
import DataLoader from '/simulator/game/data/DataLoader';

DataLoader.initialize();

export const contestList = Array.from(DataLoader.contest_map).map(
  (item) => item[1]
).reverse();

export const pIdolList = Array.from(DataLoader.p_idol_map).map(
  (item) => item[1]
);

export const pIdolCharacterMap = new Map();
pIdolList.forEach((pIdol) => {
  if (!pIdolCharacterMap.has(pIdol.character_id)) {
    pIdolCharacterMap.set(pIdol.character_id, []);
  }
  pIdolCharacterMap.get(pIdol.character_id).push(pIdol);
});

export const inputStatus = ref({
  vocal: 1000,
  dance: 1000,
  visual: 1000,
  hp: 40,
  supportBonus: 0,
});

export const status = ref({
  vocal: 1000,
  dance: 1000,
  visual: 1000,
  hp: 40,
});

export const criteria = ref({
  vocal: 0,
  dance: 0,
  visual: 0,
});

function correct(input, base) {
  const number = Number(input);
  if (Number.isFinite(number)) {
    return number;
  }
  return base;
}

const urlParams = new URLSearchParams(window.location.search);

const statusParam = urlParams.get('status');
if (statusParam) {
  const qStatus = statusParam.split(':');
  inputStatus.value.vocal = correct(qStatus[0], inputStatus.value.vocal);
  inputStatus.value.dance = correct(qStatus[1], inputStatus.value.dance);
  inputStatus.value.visual = correct(qStatus[2], inputStatus.value.visual);
  inputStatus.value.hp = correct(qStatus[3], inputStatus.value.hp);
  inputStatus.value.supportBonus = correct(
    qStatus[4],
    inputStatus.value.supportBonus
  );
}
/* コンテスト */
export const contestStageId = ref(null);
export const contest = ref(null);
export const contestStage = ref(null);
export const contestPlan = ref('');
export const contestPItemIds = ref([]);

watch(contestStageId, () => {
  let [contestId, stageId] = contestStageId.value.split(':').map(Number);
  if (!DataLoader.contest_map.has(contestId)) {
    contestId = contestList[0].id;
    stageId = 0;
  }
  contest.value = DataLoader.get_contest_by_id(contestId);
  contestStage.value = contest.value.stages[stageId];
  criteria.value = contest.value.criteria;
  contestPlan.value = contestStage.value.plan;
  contestPItemIds.value = contestStage.value.stagePItemIds;
});

const contestParam = urlParams.get('contest_stage');
if (contestParam) {
  contestStageId.value = contestParam;
} else {
  contestStageId.value = `${contestList[0].id}:0`;
}
/* コンテスト終わり */

export const selectedPIdol = ref(null);
export const pIdolPlan = computed(() => selectedPIdol.value?.plan ?? '');
export const pIdolCards = computed(() => {
  if (selectedPIdol.value) {
    return [
      selectedPIdol.value.unique_skillCard_id,
      selectedPIdol.value.unique_skillCard_id + 1,
    ].map((id) => DataLoader.getCardById(id));
  }
  return [];
});
export const sameSelectedPIdols = ref(null);
export const samePIdolCards = computed(() => {
  if (sameSelectedPIdols.value) {
    const array = [];
    for (let i = 0; i < sameSelectedPIdols.value.length; i++) {
      if (sameSelectedPIdols.value[i].plan == pIdolPlan.value) {
        array.push(sameSelectedPIdols.value[i].unique_skillCard_id);
        array.push(sameSelectedPIdols.value[i].unique_skillCard_id + 1);
      }
    }
    return array.map((id) => DataLoader.getCardById(id));
  }
  return [];
});
export const selectedCardsList = ref([
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
]);

export const availableSelectedCardsList = ref([
  [true, true, true, true, true, true],
  [true, true, true, true, true, true],
]);

const pIdolIdParam = urlParams.get('p_idol');
if (pIdolIdParam) {
  const [pIdolId] = pIdolIdParam.split(':').map(Number);
  if (DataLoader.p_idol_map.has(pIdolId)) {
    selectedPIdol.value = DataLoader.p_idol_map.get(pIdolId);
    sameSelectedPIdols.value = Array.from(
      DataLoader.p_idol_characterId_map.get(selectedPIdol.value.character_id)
    );
  }
}

const cardIdsParam = urlParams.get('cards');
if (cardIdsParam) {
  const decks = cardIdsParam.split('_');
  for (let i = 0; i < decks.length; i++) {
    const cardIds = decks[i].split(':').map(Number);
    for (let j = 0; j < selectedCardsList.value[i].length; j++) {
      if (DataLoader.cardMap.has(cardIds[j])) {
        selectedCardsList.value[i][j] = DataLoader.cardMap.get(cardIds[j]);
      }
    }
  }
}

export const selectedStagePItems = ref([null, null, null, null]);
export const selectedIdolPItems = ref([null, null, null, null]);

const stagePItemIdParam = urlParams.get('stage_p_items');
if (stagePItemIdParam) {
  const pItemIds = stagePItemIdParam.split(':').map(Number);
  pItemIds.forEach((pItemId, index) => {
    if (DataLoader.p_item_map.has(pItemId)) {
      selectedStagePItems.value[index] = DataLoader.p_item_map.get(pItemId);
    }
  });
}

export const pIdolPItems = computed(() => {
  if (selectedPIdol.value) {
    return [
      selectedPIdol.value.unique_pItem_id,
      selectedPIdol.value.unique_pItem_id + 1,
    ].map((id) => DataLoader.getPItemById(id));
  }
  return [];
});

const idolPItemIdParam = urlParams.get('p_items');
if (idolPItemIdParam) {
  const pItemIds = idolPItemIdParam.split(':').map(Number);
  pItemIds.forEach((pItemId, index) => {
    if (DataLoader.p_item_map.has(pItemId)) {
      selectedIdolPItems.value[index] = DataLoader.p_item_map.get(pItemId);
    }
  });
}

/* 互換性 */
const pItemIdParam = urlParams.get('p_item_ids');
if (pItemIdParam) {
  const pItemIds = pItemIdParam.split(':').map(Number);
  selectedStagePItems.value[0] = DataLoader.p_item_map.get(pItemIds[0]);
  pItemIds.slice(1).forEach((pItemId, index) => {
    if (DataLoader.p_item_map.has(pItemId)) {
      console.log(index, DataLoader.p_item_map.get(pItemId));
      selectedIdolPItems.value[index] = DataLoader.p_item_map.get(pItemId);
    }
  });
}

//
//
//
//
export const getData = () => {
  if (!selectedPIdol.value) {
    return;
  }
  const skillCardIds = [];
  selectedCardsList.value.forEach((deck, deckIndex) => {
    deck.forEach((card, index) => {
      if (card && availableSelectedCardsList.value[deckIndex][index]) {
        skillCardIds.push(card.id);
      }
    });
  });
  switch (selectedPIdol.value.plan) {
    case 'sense':
      skillCardIds.push(
        1010010,
        1010010,
        1011010,
        1011020,
        1021010,
        1021010,
        1021020,
        1021020
      );
      break;
    case 'logic':
      skillCardIds.push(
        1012010,
        1012020,
        1020010,
        1020010,
        1022010,
        1022010,
        1022020,
        1022020
      );
      break;
  }
  const pItemIds = [];
  selectedStagePItems.value.forEach((pItem) => {
    if (pItem) {
      pItemIds.push(pItem.id);
    }
  });
  selectedIdolPItems.value.forEach((pItem) => {
    if (pItem) {
      pItemIds.push(pItem.id);
    }
  });
  return {
    turn: contestStage.value.turn,
    criteria: {
      vocal: contest.value.criteria.vocal,
      dance: contest.value.criteria.dance,
      visual: contest.value.criteria.visual,
    },
    turnTypes: {
      vocal: contestStage.value.turnTypes.vocal,
      dance: contestStage.value.turnTypes.dance,
      visual: contestStage.value.turnTypes.visual,
    },
    rank: [contest.value.rank[0], contest.value.rank[1], contest.value.rank[2]],
    firstTurnFirstTypeProb: contestStage.value.firstTurnFirstTypeProb,
    parameter: {
      vocal: status.value.vocal,
      dance: status.value.dance,
      visual: status.value.visual,
      hp: status.value.hp,
    },
    plan: selectedPIdol.value.plan,
    trend: selectedPIdol.value.trend,
    pItemIds: pItemIds,

    skillCardIds: skillCardIds,
    count: 2000,
  };
};

watchEffect(() => {
  const urlParams = new URLSearchParams();
  if (selectedPIdol.value) {
    urlParams.set('p_idol', selectedPIdol.value.id);
  }
  if (contestStageId.value) {
    urlParams.set('contest_stage', contestStageId.value);
  }
  urlParams.set(
    'status',
    [
      inputStatus.value.vocal,
      inputStatus.value.dance,
      inputStatus.value.visual,
      inputStatus.value.hp,
      inputStatus.value.supportBonus,
    ].join(':')
  );
  urlParams.set(
    'cards',
    selectedCardsList.value
      .map((deck) => deck.map((card) => card?.id).join(':'))
      .join('_')
  );
  urlParams.set(
    'stage_p_items',
    selectedStagePItems.value.map((pItem) => pItem?.id).join(':')
  );
  urlParams.set(
    'p_items',
    selectedIdolPItems.value.map((pItem) => pItem?.id).join(':')
  );
  window.history.replaceState(null, null, '?' + urlParams.toString());
});
