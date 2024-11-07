export default class ParameterCalculator {
  static adjustParameter(parameter) {
    if (parameter <= 300) {
      return parameter * 5 + 1;
    }
    if (parameter <= 600) {
      return parameter * 4 + 300;
    }
    if (parameter <= 900) {
      return parameter * 3 + 900;
    }
    if (parameter <= 1200) {
      return parameter * 2 + 1800;
    }
    return parameter * 1 + 3000;
  }

  static getScoreBonus(status, criterion, penalty, supportBonus) {
    return Math.ceil(
      Math.floor(
        Math.ceil(status * criterion * (1 - penalty) + 100) *
          (1 + supportBonus) *
          10
      ) / 10
    );
  }

  static getPenalty(parameter, criteria) {
    return parameter
      .map((value, index) => {
        const threshold = (80 * criteria[index]) / 9;
        if (value <= threshold) {
          return (
            Math.floor((0.25 - (value / threshold) * 0.15) * 10000) / 10000
          );
        }
        return 0;
      })
      .reduce((total, current) => total + current, 0);
  }

  static get(parameter, criteria, supportBonus) {
    const adjustedParameter = parameter.map((value) =>
      ParameterCalculator.adjustParameter(value)
    );
    const scoreVonus = adjustedParameter.map((value, index) =>
      ParameterCalculator.getScoreBonus(
        value,
        criteria[index] / 100,
        ParameterCalculator.getPenalty(parameter, criteria),
        supportBonus
      )
    );
    return scoreVonus;
  }
}
