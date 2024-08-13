<template>
  <div ref="box">
    <canvas ref="boxPlotCanvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, watch } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  width: {
    type: Number,
    default: 600,
  },
  height: {
    type: Number,
    default: 400,
  },
});

const boxPlotCanvas = ref(null);
const padding = 70;

onMounted(() => {
  drawChart();
});

watch(
  () => props.data,
  () => {
    drawChart();
  },
  { deep: true }
);

function drawChart() {
  const ctx = boxPlotCanvas.value.getContext('2d');
  ctx.clearRect(0, 0, props.width, props.height);

  const allValues = props.data.flatMap((d) => [
    d.min,
    d.q1,
    d.median,
    d.q3,
    d.max,
  ]);
  const minValue = Math.min(...allValues);
  const minScale = Math.floor(minValue / 1000) * 1000;
  const maxValue = Math.max(...allValues);
  const maxScale = Math.ceil(maxValue / 1000) * 1000;

  const range = maxScale - minScale;
  const step = Math.ceil(range / 5);
  const yMin = Math.floor(minValue / step) * step;
  const yMax = Math.ceil(maxValue / step) * step;

  drawYAxis(ctx, yMin, yMax, step, props.height, padding);
  drawBoxPlot(ctx, props.data, props.width, props.height, padding, yMin, yMax);
}

function drawYAxis(ctx, yMin, yMax, step, height, padding) {
  const yScale = (value) =>
    height -
    padding -
    ((value - yMin) * (height - 2 * padding)) / (yMax - yMin);

  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.stroke();

  ctx.textAlign = 'right';
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000';

  for (let value = yMin; value <= yMax; value += step) {
    const y = yScale(value);
    ctx.fillText(value, padding - 10, y + 5);
    ctx.beginPath();
    ctx.moveTo(padding - 5, y);
    ctx.lineTo(padding, y);
    ctx.stroke();

    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(props.width - padding, y);
    ctx.stroke();
    ctx.strokeStyle = '#000';
  }
}

function drawBoxPlot(ctx, data, width, height, padding, yMin, yMax) {
  const boxWidth = 50;
  const spacing = (width - 2 * padding) / data.length;
  const yScale = (value) =>
    height -
    padding -
    ((value - yMin) * (height - 2 * padding)) / (yMax - yMin);

  data.forEach((item, index) => {
    const x = padding + index * spacing + spacing / 2;

    ctx.fillStyle = '#42A5F5';
    ctx.fillRect(
      x - boxWidth / 2,
      yScale(item.q3),
      boxWidth,
      yScale(item.q1) - yScale(item.q3)
    );

    ctx.strokeStyle = '#1E88E5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - boxWidth / 2, yScale(item.median));
    ctx.lineTo(x + boxWidth / 2, yScale(item.median));
    ctx.stroke();
    ctx.lineWidth = 1;

    ctx.strokeStyle = '#1E88E5';
    ctx.beginPath();
    ctx.moveTo(x, yScale(item.min));
    ctx.lineTo(x, yScale(item.q1));
    ctx.moveTo(x, yScale(item.max));
    ctx.lineTo(x, yScale(item.q3));
    ctx.stroke();

    ctx.strokeStyle = '#1E88E5';
    ctx.beginPath();
    ctx.moveTo(x - boxWidth / 4, yScale(item.min));
    ctx.lineTo(x + boxWidth / 4, yScale(item.min));
    ctx.moveTo(x - boxWidth / 4, yScale(item.max));
    ctx.lineTo(x + boxWidth / 4, yScale(item.max));
    ctx.stroke();
  });
}
</script>

<style scoped>
canvas {
  width: 100%;
}
</style>
