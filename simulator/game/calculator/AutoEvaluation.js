import ActiveStatusEffect from "../models/ActiveStatusEffect";
import Effect from "../models/Effect";
import PassiveStatusEffect from "../models/PassiveStatusEffect";
import Player from "../models/Player";

const AutoEvaluation = {
    "ProduceExamEffectType_ExamParameterBuff": {
        "evaluations": {
            "1": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "2": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 488.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -813.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -313.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -517.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -5382.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "3": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 2000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1572.0,
                    "examStatusEnchantCoefficientPermil": 636.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 488.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -813.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -313.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -694.0,
                    "examStatusEnchantCoefficientPermil": 745.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -5382.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "4": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 3000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 2145.0,
                    "examStatusEnchantCoefficientPermil": 733.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 976.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1627.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -625.0,
                    "examStatusEnchantCoefficientPermil": 501.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -1122.0,
                    "examStatusEnchantCoefficientPermil": 619.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -5382.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 502.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1254.0,
                    "examStatusEnchantCoefficientPermil": 3845.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "5": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 4000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 2717.0,
                    "examStatusEnchantCoefficientPermil": 789.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 976.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1627.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -625.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -1300.0,
                    "examStatusEnchantCoefficientPermil": 863.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -5382.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 964.0,
                    "examStatusEnchantCoefficientPermil": 1301.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "6": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 5000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 3290.0,
                    "examStatusEnchantCoefficientPermil": 826.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1952.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -3253.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -1250.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -1978.0,
                    "examStatusEnchantCoefficientPermil": 657.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -5382.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 499.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 964.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "7": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 156.0,
                    "examStatusEnchantCoefficientPermil": 6000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 3862.0,
                    "examStatusEnchantCoefficientPermil": 852.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1952.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -3253.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -1250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -2156.0,
                    "examStatusEnchantCoefficientPermil": 917.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -5382.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 964.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            }
        }
    },
    "ProduceExamEffectType_ExamLessonBuff": {
        "evaluations": {
            "1": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 583.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "2": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 583.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 488.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -813.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -313.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -2000.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20183.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "3": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 259.0,
                    "examStatusEnchantCoefficientPermil": 2000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 3145.0,
                    "examStatusEnchantCoefficientPermil": 636.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 488.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -813.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -313.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -3145.0,
                    "examStatusEnchantCoefficientPermil": 636.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20183.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "4": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 167.0,
                    "examStatusEnchantCoefficientPermil": 3000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 4290.0,
                    "examStatusEnchantCoefficientPermil": 733.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 2573.0,
                    "examStatusEnchantCoefficientPermil": 1874.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 976.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1627.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -625.0,
                    "examStatusEnchantCoefficientPermil": 501.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -4290.0,
                    "examStatusEnchantCoefficientPermil": 733.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20183.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 502.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 2090.0,
                    "examStatusEnchantCoefficientPermil": 2307.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "5": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 96.0,
                    "examStatusEnchantCoefficientPermil": 4000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 5435.0,
                    "examStatusEnchantCoefficientPermil": 789.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1108.0,
                    "examStatusEnchantCoefficientPermil": 2322.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 976.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1627.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -625.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -5435.0,
                    "examStatusEnchantCoefficientPermil": 789.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20183.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1033.0,
                    "examStatusEnchantCoefficientPermil": 2023.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "6": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 96.0,
                    "examStatusEnchantCoefficientPermil": 5000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 6580.0,
                    "examStatusEnchantCoefficientPermil": 826.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1352.0,
                    "examStatusEnchantCoefficientPermil": 820.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1952.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -3253.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -1250.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -6580.0,
                    "examStatusEnchantCoefficientPermil": 826.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20183.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 499.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 597.0,
                    "examStatusEnchantCoefficientPermil": 1730.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "7": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 96.0,
                    "examStatusEnchantCoefficientPermil": 6000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 7725.0,
                    "examStatusEnchantCoefficientPermil": 852.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1352.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1952.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -3253.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -1250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": -7725.0,
                    "examStatusEnchantCoefficientPermil": 852.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": -4822.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20183.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 597.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            }
        }
    },
    "ProduceExamEffectType_ExamReview": {
        "evaluations": {
            "1": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "2": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 2000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 87.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1701.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 315.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 505.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -842.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -361.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -315.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -6441.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "3": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 4000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 87.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 2137.0,
                    "examStatusEnchantCoefficientPermil": 796.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 359.0,
                    "examStatusEnchantCoefficientPermil": 877.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 505.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -842.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -361.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -359.0,
                    "examStatusEnchantCoefficientPermil": 877.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -6441.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "4": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 6000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 174.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 2573.0,
                    "examStatusEnchantCoefficientPermil": 831.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 804.0,
                    "examStatusEnchantCoefficientPermil": 447.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1011.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1685.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -722.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -804.0,
                    "examStatusEnchantCoefficientPermil": 447.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -6441.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 499.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "5": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 8000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 174.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 3009.0,
                    "examStatusEnchantCoefficientPermil": 855.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 891.0,
                    "examStatusEnchantCoefficientPermil": 902.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1011.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1685.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -505.0,
                    "examStatusEnchantCoefficientPermil": 1430.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -891.0,
                    "examStatusEnchantCoefficientPermil": 902.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -6441.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "6": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 10000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 348.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 3445.0,
                    "examStatusEnchantCoefficientPermil": 873.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1957.0,
                    "examStatusEnchantCoefficientPermil": 455.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 2022.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -3370.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -1009.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -1957.0,
                    "examStatusEnchantCoefficientPermil": 455.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -6441.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "7": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 12000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 348.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 3881.0,
                    "examStatusEnchantCoefficientPermil": 888.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 2131.0,
                    "examStatusEnchantCoefficientPermil": 918.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 2022.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -3370.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -1009.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -2131.0,
                    "examStatusEnchantCoefficientPermil": 918.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -6441.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            }
        }
    },
    "ProduceExamEffectType_ExamCardPlayAggressive": {
        "evaluations": {
            "1": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "2": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 2000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 335.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 545.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 293.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 146.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -585.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -2622.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -293.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -13031.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "3": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 4000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 335.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 795.0,
                    "examStatusEnchantCoefficientPermil": 686.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 921.0,
                    "examStatusEnchantCoefficientPermil": 318.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 146.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -585.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -2622.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -921.0,
                    "examStatusEnchantCoefficientPermil": 318.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -13031.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "4": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 6000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 521.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1045.0,
                    "examStatusEnchantCoefficientPermil": 761.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 2606.0,
                    "examStatusEnchantCoefficientPermil": 353.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 255.0,
                    "examStatusEnchantCoefficientPermil": 573.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1021.0,
                    "examStatusEnchantCoefficientPermil": 573.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -4079.0,
                    "examStatusEnchantCoefficientPermil": 643.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -2606.0,
                    "examStatusEnchantCoefficientPermil": 353.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -13031.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 573.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "5": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 8000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 500.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1045.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 8842.0,
                    "examStatusEnchantCoefficientPermil": 295.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 358.0,
                    "examStatusEnchantCoefficientPermil": 712.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1431.0,
                    "examStatusEnchantCoefficientPermil": 713.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -7283.0,
                    "examStatusEnchantCoefficientPermil": 560.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -8842.0,
                    "examStatusEnchantCoefficientPermil": 295.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -13031.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 715.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "6": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 10000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1545.0,
                    "examStatusEnchantCoefficientPermil": 676.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 10704.0,
                    "examStatusEnchantCoefficientPermil": 826.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 483.0,
                    "examStatusEnchantCoefficientPermil": 741.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1931.0,
                    "examStatusEnchantCoefficientPermil": 741.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -7283.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -10704.0,
                    "examStatusEnchantCoefficientPermil": 826.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -13031.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 741.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            },
            "7": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 186.0,
                    "examStatusEnchantCoefficientPermil": 12000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1545.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 12565.0,
                    "examStatusEnchantCoefficientPermil": 852.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 483.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -1931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": -7283.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": -12565.0,
                    "examStatusEnchantCoefficientPermil": 852.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -13031.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 100000.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                }
            }
        }
    },
    "ProduceExamEffectType_ExamConcentration": {
        "evaluations": {
            "1": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                }
            },
            "2": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 318.0,
                    "examStatusEnchantCoefficientPermil": 1110.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1948.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 48706.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "3": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 113.0,
                    "examStatusEnchantCoefficientPermil": 3124.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 651.0,
                    "examStatusEnchantCoefficientPermil": 692.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1948.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19482.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "4": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 99.0,
                    "examStatusEnchantCoefficientPermil": 3566.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 976.0,
                    "examStatusEnchantCoefficientPermil": 641.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1948.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19482.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "5": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 99.0,
                    "examStatusEnchantCoefficientPermil": 3566.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 1301.0,
                    "examStatusEnchantCoefficientPermil": 611.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1948.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19482.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "6": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 85.0,
                    "examStatusEnchantCoefficientPermil": 4153.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 400.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 2877.0,
                    "examStatusEnchantCoefficientPermil": 421.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1948.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19482.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "7": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 61.0,
                    "examStatusEnchantCoefficientPermil": 5787.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 597.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 3904.0,
                    "examStatusEnchantCoefficientPermil": 425.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "8": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 51.0,
                    "examStatusEnchantCoefficientPermil": 6922.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 664.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1500.0,
                    "examStatusEnchantCoefficientPermil": 429.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 4554.0,
                    "examStatusEnchantCoefficientPermil": 455.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "9": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 51.0,
                    "examStatusEnchantCoefficientPermil": 6922.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 712.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 406.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 5205.0,
                    "examStatusEnchantCoefficientPermil": 474.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "10": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 51.0,
                    "examStatusEnchantCoefficientPermil": 6922.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 748.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 472.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 5855.0,
                    "examStatusEnchantCoefficientPermil": 485.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "11": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 445.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 525.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 13012.0,
                    "examStatusEnchantCoefficientPermil": 297.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "12": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 568.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 14313.0,
                    "examStatusEnchantCoefficientPermil": 336.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "13": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 546.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 604.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 15614.0,
                    "examStatusEnchantCoefficientPermil": 366.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "14": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 584.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 635.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 16916.0,
                    "examStatusEnchantCoefficientPermil": 388.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 146118.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 1922.0,
                    "examStatusEnchantCoefficientPermil": 1014.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 19224.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 4678.0,
                    "examStatusEnchantCoefficientPermil": 5206.0
                }
            }
        }
    },
    "ProduceExamEffectType_ExamFullPower": {
        "evaluations": {
            "1": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                }
            },
            "2": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 318.0,
                    "examStatusEnchantCoefficientPermil": 1110.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2524.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 63106.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "3": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 113.0,
                    "examStatusEnchantCoefficientPermil": 3124.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 651.0,
                    "examStatusEnchantCoefficientPermil": 692.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2524.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 25242.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "4": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 99.0,
                    "examStatusEnchantCoefficientPermil": 3566.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 976.0,
                    "examStatusEnchantCoefficientPermil": 641.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2524.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 25242.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "5": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 99.0,
                    "examStatusEnchantCoefficientPermil": 3566.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 250.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 1301.0,
                    "examStatusEnchantCoefficientPermil": 611.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2524.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 25242.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 24353.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                }
            },
            "6": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 85.0,
                    "examStatusEnchantCoefficientPermil": 4153.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 75.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 400.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 2877.0,
                    "examStatusEnchantCoefficientPermil": 421.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2524.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 25242.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "7": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 61.0,
                    "examStatusEnchantCoefficientPermil": 5787.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 597.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1000.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 3904.0,
                    "examStatusEnchantCoefficientPermil": 425.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "8": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 51.0,
                    "examStatusEnchantCoefficientPermil": 6922.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 664.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 1500.0,
                    "examStatusEnchantCoefficientPermil": 429.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 4554.0,
                    "examStatusEnchantCoefficientPermil": 455.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "9": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 51.0,
                    "examStatusEnchantCoefficientPermil": 6922.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 712.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 406.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 5205.0,
                    "examStatusEnchantCoefficientPermil": 474.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 9741.0,
                    "examStatusEnchantCoefficientPermil": 2500.0
                }
            },
            "10": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 51.0,
                    "examStatusEnchantCoefficientPermil": 6922.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 151.0,
                    "examStatusEnchantCoefficientPermil": 748.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 472.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 5855.0,
                    "examStatusEnchantCoefficientPermil": 485.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "11": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 445.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 525.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 13012.0,
                    "examStatusEnchantCoefficientPermil": 297.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "12": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 500.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 568.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 14313.0,
                    "examStatusEnchantCoefficientPermil": 336.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "13": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 546.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 604.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 15614.0,
                    "examStatusEnchantCoefficientPermil": 366.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 7047.0,
                    "examStatusEnchantCoefficientPermil": 3456.0
                }
            },
            "14": {
                "ProduceExamAutoEvaluationType_Parameter": {
                    "evaluation": 34.0,
                    "examStatusEnchantCoefficientPermil": 10382.0
                },
                "ProduceExamAutoEvaluationType_Block": {
                    "evaluation": 301.0,
                    "examStatusEnchantCoefficientPermil": 584.0
                },
                "ProduceExamAutoEvaluationType_Stamina": {
                    "evaluation": 2000.0,
                    "examStatusEnchantCoefficientPermil": 635.0
                },
                "ProduceExamAutoEvaluationType_ExamLessonBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamReview": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamCardPlayAggressive": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamParameterBuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown": {
                    "evaluation": 1716.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd": {
                    "evaluation": -6506.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamBlockAddDown": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickLessonDebuff": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickParameterDebuff": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSleepy": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ExamGimmickSlump": {
                    "evaluation": -20294.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix": {
                    "evaluation": 16916.0,
                    "examStatusEnchantCoefficientPermil": 388.0
                },
                "ProduceExamAutoEvaluationType_PlayableValueAdd": {
                    "evaluation": 0.0,
                    "examStatusEnchantCoefficientPermil": 0.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ParameterBuffOverTurn": {
                    "evaluation": 1.0,
                    "examStatusEnchantCoefficientPermil": 1.0
                },
                "ProduceExamAutoEvaluationType_ExamExtraTurn": {
                    "evaluation": 189318.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentration": {
                    "evaluation": 1946.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservation": {
                    "evaluation": 635.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPower": {
                    "evaluation": 9612.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerPointTotal": {
                    "evaluation": 2491.0,
                    "examStatusEnchantCoefficientPermil": 1013.0
                },
                "ProduceExamAutoEvaluationType_ExamConcentrationCount": {
                    "evaluation": 7784.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamPreservationCount": {
                    "evaluation": 13931.0,
                    "examStatusEnchantCoefficientPermil": 1000.0
                },
                "ProduceExamAutoEvaluationType_ExamFullPowerCount": {
                    "evaluation": 24908.0,
                    "examStatusEnchantCoefficientPermil": 2534.0
                },
                "ProduceExamAutoEvaluationType_HoldCount": {
                    "evaluation": 4678.0,
                    "examStatusEnchantCoefficientPermil": 5206.0
                }
            }
        }
    }
}
const AutoTriggerEvaluation = {
    "e_trigger-exam_card_play_after-p_card_search-playing-effect_group-visible-exam_block-000-0_1": 900,
    "e_trigger-exam_card_play_after-p_card_search-playing-effect_group-visible-exam_review-000-0_1": 900,
    "e_trigger-exam_card_play-p_card_search-active_skill-playing-0_1": 900,
    "e_trigger-exam_card_play-p_card_search-mental_skill-playing-0_1": 900,
    "e_trigger-exam_card_play-p_card_search-playing-0_1": 1000,
    "e_trigger-exam_end_turn": 1000,
    "e_trigger-exam_end_turn-lesson_buff_up-3": 800,
    "e_trigger-exam_end_turn-review_up-3": 800,
    "e_trigger-exam_stance_change_count_interval-1": 850,
    "e_trigger-exam_start_turn-not-no_stance": 900,
    "e_trigger-exam_status_change-exam_full_power_point": 850,
    "e_trigger-none-concentration_up": 0,
    "e_trigger-none-full_power_point_up-1": 900,
    "e_trigger-none-full_power_up": 1000,
    "e_trigger-none-not-no_stance": 1000,
    "e_trigger-none-preservation_up": 0,
    "default": 1,
}

//import { onTest } from "../../setting.js";

export default class AutoEvaluationData {
    static effectNameToIdMapping = {
        'score':"ProduceExamAutoEvaluationType_Parameter",
        'パラメータ':"ProduceExamAutoEvaluationType_Parameter",
        'genki':"ProduceExamAutoEvaluationType_Block",
        'hp':"ProduceExamAutoEvaluationType_Stamina",
        '集中':"ProduceExamAutoEvaluationType_ExamLessonBuff",
        '好印象':"ProduceExamAutoEvaluationType_ExamReview",
        'やる気':"ProduceExamAutoEvaluationType_ExamCardPlayAggressive",
        '好調':"ProduceExamAutoEvaluationType_ExamParameterBuff",
        '消費体力減少':"ProduceExamAutoEvaluationType_ExamStaminaConsumptionDown",
        '消費体力増加':"ProduceExamAutoEvaluationType_ExamStaminaConsumptionAdd",
        '消費体力削減':"ProduceExamAutoEvaluationType_ExamStaminaConsumptionDownFix",
        'スキルカード使用数追加':"ProduceExamAutoEvaluationType_PlayableValueAdd",
        '絶好調':"ProduceExamAutoEvaluationType_ParameterBuffMultiplePerTurn",
        '好調_f':"ProduceExamAutoEvaluationType_ParameterBuffOverTurn",
        'extra_turn':"ProduceExamAutoEvaluationType_ExamExtraTurn",
        //"ProduceExamAutoEvaluationType_ExamConcentration",//强气
        //"ProduceExamAutoEvaluationType_ExamPreservation",//温存
        //"ProduceExamAutoEvaluationType_ExamFullPower",//全力
        //"ProduceExamAutoEvaluationType_ExamFullPowerPointTotal",//全力总点数
        //"ProduceExamAutoEvaluationType_ExamConcentrationCount",//强气获得次数
        //"ProduceExamAutoEvaluationType_ExamPreservationCount",//温存获得次数
        //"ProduceExamAutoEvaluationType_ExamFullPowerCount",//全力获得次数
        '手牌数':"ProduceExamAutoEvaluationType_HoldCount",
    };
    static jobNameToIdMapping = {
        '好調':"ProduceExamEffectType_ExamParameterBuff",
        '集中':"ProduceExamEffectType_ExamLessonBuff",
        '好印象':"ProduceExamEffectType_ExamReview",
        'やる気':"ProduceExamEffectType_ExamCardPlayAggressive"
        
    };
    static calculateTurnMapping = {
        'sense': 2,
        'logic': 2,
        'anomaly': 1,
    }
    
    /**
     * @param {string} effectDescription
     * @returns {string}
     */
    static getTriggerEffectId(effectDescription) {
        switch (effectDescription) {
            case '元気効果のスキルカード使用後、好印象+1':
                return "e_trigger-exam_card_play_after-p_card_search-playing-effect_group-visible-exam_block-000-0_1";
            case '好印象効果のスキルカード使用後、好印象の50%分のパラメータ':
                return "e_trigger-exam_card_play_after-p_card_search-playing-effect_group-visible-exam_review-000-0_1";
            case 'アクティブスキルカード使用時固定元気+2':
            case 'アクティブスキルカード使用時、パラメータ+4':
            case 'アクティブスキルカード使用時、パラメータ+5':
            case 'アクティブスキルカード使用時集中+1':
                return "e_trigger-exam_card_play-p_card_search-active_skill-playing-0_1";
            case 'メンタルスキルカード使用時好印象+1':
            case 'メンタルスキルカード使用時やる気+1':
                return "e_trigger-exam_card_play-p_card_search-mental_skill-playing-0_1";
            case 'スキルカード使用時、好印象の30%分パラメータ':
            case 'スキルカード使用時、好印象の50%分パラメータ':
                return "e_trigger-exam_card_play-p_card_search-playing-0_1";
            case 'ターン終了時スコア+4':
            case 'ターン終了時、好印象+1':
                return "e_trigger-exam_end_turn";
            case 'ターン終了時、集中が3以上の場合、集中+2':
                return "e_trigger-exam_end_turn-lesson_buff_up-3";
            case 'ターン終了時、好印象が3以上の場合、好印象+3':
                return "e_trigger-exam_end_turn-review_up-3";
            default:
                return "default";
        }
    }
    

    // static round(number, precision) {
    //     return Math.round(number + "e" + precision) / Math.pow(10, precision);
    // }

    static get(IdolType,type,remainTurn,n,unitValue,autoId){
        if(remainTurn<1){
            remainTurn=1
        }

        if(type=='score'){
            n/=unitValue
        }
        //else if(type=='パラメータ'||type=='、パラメータ'){
        else if(type=='パラメータ'){
            type='score'
        }
        else if(type=='、パラメータ'){
            n=0.5
        }
        
        if (type.slice(0,14) == 'アクティブスキルカード使用時') {
            let [ ltype,n ] = type.slice(14).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*1.9)
        }
        else if (type.slice(0,13) == 'メンタルスキルカード使用時') {
            let [ ltype,n ] = type.slice(13).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*1.9)
        }
        else if (type.slice(0,17) == 'ターン終了時、集中が3以上の場合、') {
            let [ ltype,n ] = type.slice(17).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*1.8)
        }
        else if (type.slice(0,18) == 'ターン終了時、好印象が3以上の場合、') {
            let [ ltype,n ] = type.slice(18).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*1.8)
        }
        else if (type.slice(0,7) == 'ターン終了時、') {
            let [ ltype,n ] = type.slice(7).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*2.0)
        }
        else if (type.slice(0,16) == '好印象効果のスキルカード使用後、') {
            let [ ltype,n ] = type.slice(7).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*1.9)
        }
        else if (type.slice(0,15) == '元気効果のスキルカード使用後、') {
            let [ ltype,n ] = type.slice(7).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*1.9)
        }
        else if (type.slice(0,10) == 'スキルカード使用時、') {
            let [ ltype,n ] = type.slice(7).split('+')
            return Math.floor(this.get(IdolType,ltype,remainTurn,n,unitValue)*2.0)
        }

        if(autoId<=2&&type=='score'){
            unitValue*=(unitValue/10-1)/3+1 //主观臆断
        }

        let eva = AutoEvaluation[this.jobNameToIdMapping[IdolType]]["evaluations"];
        let info;
        if(!eva[remainTurn]){
            info=eva[AutoEvaluation["maxRemainingTerm"]];
        }else{
            info=eva[remainTurn];
        }

        if(autoId==1&&type.slice(0,16)=='好印象効果のスキルカード使用後、'){//仅新mao
            info=info["ProduceExamAutoEvaluationType_ExamExtraTurn"];
            return Math.floor(info["evaluation"]*info["examStatusEnchantCoefficientPermil"]*n*unitValue/1000000);
        }

        if(!this.effectNameToIdMapping[type]){
            return 0;
        }
        info=info[this.effectNameToIdMapping[type]];

        //if(onTest) console.log(remainTurn,type,info,n,unitValue,Math.floor(info["evaluation"]*info["examStatusEnchantCoefficientPermil"]*n*unitValue/1000000))

        return Math.floor(info["evaluation"]*info["examStatusEnchantCoefficientPermil"]*n*unitValue/1000000);
    }

    static judge_parameter(score, parameter, info){
        return 0//this.round(score*300/(parameter["vocal"]+parameter["dance"]+parameter["visual"])+0.00009999999975,6) * info[this.effectNameToIdMapping["score"]]["evaluation"];
    }

    static get_effect_evaluation(status, info){
        return status.pStatus.getValue("集中") *info[this.effectNameToIdMapping["集中"]]["evaluation"] +
            status.pStatus.getValue("好印象") *info[this.effectNameToIdMapping["好印象"]]["evaluation"] +
            status.pStatus.getValue("やる気") *info[this.effectNameToIdMapping["やる気"]]["evaluation"] +
            status.pStatus.getValue("好調") *info[this.effectNameToIdMapping["好調"]]["evaluation"] +
            status.pStatus.getValue("消費体力削減") *info[this.effectNameToIdMapping["消費体力削減"]]["evaluation"] +
            status.pStatus.getValue("スキルカード使用数追加") *info[this.effectNameToIdMapping["スキルカード使用数追加"]]["evaluation"]
    }

    static get_buff_evaluation(status, info){
        return Math.min(status.pStatus.getValue("好調"),status.remainTurn) *info[this.effectNameToIdMapping["好調"]]["evaluation"] +
            Math.min(status.pStatus.getValue("絶好調"),status.remainTurn) *info[this.effectNameToIdMapping["絶好調"]]["evaluation"] +
            Math.min(status.pStatus.getValue("消費体力減少"),status.remainTurn) *info[this.effectNameToIdMapping["消費体力減少"]]["evaluation"] +
            Math.min(status.pStatus.getValue("消費体力増加"),status.remainTurn) *info[this.effectNameToIdMapping["消費体力増加"]]["evaluation"]
    }

    /**
     *
     * @param {Player} player
     * @returns {number}
     */
    static get_basic_evaluation(player){
        let remainTurn = player.turnManager.remainTurn;
        let rawRemainTurn = (remainTurn - player.turnManager.extraTurn)/this.calculateTurnMapping[player.plan]+1;
        if (rawRemainTurn < 1){
            rawRemainTurn = 1;
        }
        if (!AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn]){
            rawRemainTurn = AutoEvaluation["maxRemainingTerm"];
        }

        return player.score * AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn][this.effectNameToIdMapping["score"]]["evaluation"]
            * 3000 / (player.parameter.vocal + player.parameter.dance + player.parameter.visual) + 0.00009999999975
            + player.genki * AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn][this.effectNameToIdMapping["genki"]]["evaluation"]
            + player.hp * AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn][this.effectNameToIdMapping["hp"]]["evaluation"]
            + player.turnManager.extraTurn * AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn][this.effectNameToIdMapping["extra_turn"]]["evaluation"]
            + player.deck.handCardIndexes.length * AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn][this.effectNameToIdMapping["手牌数"]]["evaluation"];
    }

    /**
     *
     * @param {PassiveStatusEffect} status
     * @param {Player} player
     * @returns {number}
     */
    static get_status_evaluation (status, player){
        let eva = 0;
        if (!this.effectNameToIdMapping[status.name]){
            return eva;
        }

        let remainTurn = player.turnManager.remainTurn;
        let rawRemainTurn = (remainTurn - player.turnManager.extraTurn)/this.calculateTurnMapping[player.plan]+1;
        if (rawRemainTurn < 1){
            rawRemainTurn = 1;
        }
        if (!AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn]){
            rawRemainTurn = AutoEvaluation["maxRemainingTerm"];
        }

        if (status.isDecay){
            eva += AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping[status.name]]
            ["evaluation"] * Math.min(status.value, remainTurn);
        }
        else{
            eva += AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping[status.name]]
            ["evaluation"] * remainTurn;
        }
        
        if (status.name == "好調"){
            eva += AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping["好調_f"]]
            ["evaluation"] * remainTurn;
        }

        return eva;
    }

    /**
     *
     * @param {ActiveStatusEffect} status
     * @param {Player} player
     * @returns {number}
     */
    static get_trigger_evaluation(status, player){
        return AutoTriggerEvaluation[this.getTriggerEffectId(status.name)] / 1000
        * player.turnManager.remainTurn * status.value.value;
    }

    /**
     *
     * @param {Effect} status
     * @param {Player} player
     * @returns {number}
     */
    static get_enchant_coefficient_evaluation(status, player, isDecay=false){
        let eva = 0;
        if (!this.effectNameToIdMapping[status.type]){
            return eva;
        }

        let remainTurn = player.turnManager.remainTurn;
        let rawRemainTurn = (remainTurn - player.turnManager.extraTurn) / this.calculateTurnMapping[player.plan] + 1;
        if (rawRemainTurn < 1){
            rawRemainTurn = 1;
        }
        if (!AutoEvaluation[this.jobNameToIdMapping[player.trend]]["evaluations"][rawRemainTurn]){
            rawRemainTurn = AutoEvaluation["maxRemainingTerm"];
        }

        if (isDecay){
            eva += AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping[status.type]]
            ["evaluation"] * Math.min(status.value, remainTurn) *
            AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping[status.type]]
            ["examStatusEnchantCoefficientPermil"] / 1000;
        }
        else{
            eva += AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping[status.type]]
            ["evaluation"] * remainTurn *
            AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping[status.type]]
            ["examStatusEnchantCoefficientPermil"] / 1000;
        }
        
        if (status.type == "好調"){
            eva += AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping["好調_f"]]
            ["evaluation"] * remainTurn *
            AutoEvaluation[this.jobNameToIdMapping[player.trend]]
            ["evaluations"][rawRemainTurn][this.effectNameToIdMapping["好調_f"]]
            ["examStatusEnchantCoefficientPermil"] / 1000;
        }

        return eva;
    }
}