function DOM_text_to_elememt(text) {
  const temporaryDiv = document.createElement("div");
  temporaryDiv.innerHTML = text;
  return temporaryDiv.firstElementChild;
}

function DOM_delete_allChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export const deep_copy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

function parseExecutionLog(executeLog) {
  let htmlString = "<div>";
  for (const log of executeLog) {
    if (log.type == "use") {
      if (log.sourceType == "skillCard") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-clone"></i>スキルカード「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pItem") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-chess-rook"></i>Pアイテム「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pDrink") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-wine-bottle"></i>Pドリンク「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pStatus") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-forward"></i>ステータス効果「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pDelay") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-link"></i>予約効果「${log.source.name}」</div><div class="log-block-content">`;
      } else if (log.sourceType == "pRest") {
        htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-bed"></i>${log.source.name}</div><div class="log-block-content">`;
      }
    } else if (log.type == "end") {
      htmlString += "</div></div>";
    } else if (log.type == "show") {
      htmlString += `<div class="log-block"><div class="log-block-title"><i class="fa-solid fa-book-open"></i>${log.message}</div><div class="log-block-content">`;
    } else {
      htmlString += `<div>${log.message}</div>`;
    }
  }
  htmlString += "</div>";
  return DOM_text_to_elememt(htmlString);
}

export function parseSimulationLog(simulationLog) {
  const container = document.createElement("div");
  for (const log of simulationLog.log) {
    const textElement = `
                  <div>
                      <div class="log-turn" data-turnType="${log.turnType}">
                          <div>${log.turn}ターン目　</div>
                          <div class="log-turn-status">
    
                              <i class="fa-solid fa-star"></i>${log.status.score}
                              <i class="fa-solid fa-heart"></i>${log.status.hp}
                              <i class="fa-solid fa-shield-halved"></i>${log.status.block}
                          </div>
                      </div>
                  </div>`;
    container.appendChild(DOM_text_to_elememt(textElement));
    container.appendChild(parseExecutionLog(log.executionLog));
  }
  return container;
}
