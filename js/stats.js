'use strict';


window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  // ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;              // px;
  var step = histogramHeight / (max - 0); // px;

  // ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);
  ctx.fillText('Список результатов:', 120, 40);

  var barWidth = 40; // px;
  var indent = 100;    // px;
  var initialX = 140; // px;
  var initialY = 240;  // px;

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + indent * j, initialY - times[j] * step, barWidth, times[j] * step);
    ctx.fillText(times[j].toFixed(0), 130 + indent * j, (initialY - times[j] * step) - 20);
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.fillText(names[j], initialX + indent * j, 250);
    ctx.fillStyle = '#000'; // black;
  }
};

