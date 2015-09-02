function getTimeList (events) {
  var timeList = [];
  events.forEach(function (event, i) {
    if (timeList.map(Number).indexOf(event.startTime.valueOf()) === -1) {
      timeList.push(event.startTime);
    }
    if (timeList.map(Number).indexOf(event.endTime.valueOf()) === -1) {
      timeList.push(event.endTime);
    }
  });
  timeList.sort();
  return timeList;
};

module.exports = getTimeList;
