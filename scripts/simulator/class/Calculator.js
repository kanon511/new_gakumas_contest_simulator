
export class Calculator {
    static calcActionEvaluation (action) {
        if (action.type == 'use') {
            return 0;
        }
        if (action.type == 'end') {
            return 0;
        }
        if (action.delay) {
            return 0;
        }
        else if (action.type == 'hp') {
            return 0;
        }
        else if (action.type == 'block') {
            return 0;
        }
        else if (action.type == 'score') {
            return 0;
        }
        else if (action.type == 'add_action') {
            return 0;
        }
        else if (action.type == 'extra_turn') {
            return 0;
        }
        else if (action.type == 'draw') {
            return 0;
        }
        else if (action.type == 'upgrade') {
            return 0;
        }
        else if (action.type == 'discard') {
            return 0;
        }
        else if (action.type == 'generate') {
            return 0;
        }
        else if (action.type.indexOf('status:') == 0) {
            const statusType = action.type.split(':')[1];
            if (statusType == '集中') {
                return 0;
            }
            else if (statusType == '好調') {
                return 0;
            }
            else if (statusType == '絶好調') {
                return 0;
            }
            else if (statusType == 'やる気') {
                return 0;
            }
            else if (statusType == '好印象') {
                return 0;
            }
            else if (statusType == '消費体力削減') {
                return 0;
            }
            else if (statusType == '消費体力減少') {
                return 0;
            }
            else if (statusType == '消費体力増加') {
                return 0;
            }
            else if (statusType == '元気増加無効') {
                return 0;
            }
            else if (statusType == '低下状態無効') {
                return 0;
            }
            else if (statusType == 'スキルカード使用数追加') {
                return 0;
            }
            else if (statusType == '次に使用するスキルカードの効果を発動') {
                return 0;
            }
            else if (statusType == '次に使用するアクティブスキルカードの効果を発動') {
                return 0;
            }
            else if (statusType == 'パラメータ上昇量増加') {
                return 0;
            }
            else if (statusType == '使用したスキルカード数') {
                return 0;
            }
            else if (statusType == 'アクティブスキルカード使用時固定元気+2') {
                return 0;
            }
            else if (statusType == 'アクティブスキルカード使用時集中+1') {
                return 0;
            }
            else if (statusType == 'メンタルスキルカード使用時好印象+1') {
                return 0;
            }
            else if (statusType == 'メンタルスキルカード使用時やる気+1') {
                return 0;
            }
            else if (statusType == 'ターン終了時、好印象+1') {
                return 0;
            }
            else if (statusType == 'ターン終了時、集中が3以上の場合、集中+2') {
                return 0;
            }
            else if (statusType == 'ターン終了時、好印象が3以上の場合、好印象+3') {
                return 0;
            }
            else if (statusType == 'アクティブスキルカード使用時、パラメータ+4') {
                return 0;
            }
            else if (statusType == 'アクティブスキルカード使用時、パラメータ+5') {
                return 0;
            }
            else if (statusType == 'スキルカード使用時、好印象の30%分パラメータ') {
                return 0;
            }
            else if (statusType == 'スキルカード使用時、好印象の50%分パラメータ') {
                return 0;
            }
            else {
                throw new Error(`次のステータスは定義されていません -> ${statusType}`);
            }
        }
        else {
            throw new Error(`次のアクションタイプは定義されていません -> ${action.type}`);
        }
    }
    
}