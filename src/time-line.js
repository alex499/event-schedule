var millisecondsToHour = 60 * 60 * 1000;

function getTimeLine (timeList) {
  var timeLine = [];
  var difference;
  var height;

  timeList.forEach(function (time) {
    difference = Math.abs(timeList[0] - time);
    height = difference * (100 / millisecondsToHour);
    timeLine.push({
      time: time,
      top: height,
    });
  });
  return timeLine;
}

module.exports = getTimeLine;
