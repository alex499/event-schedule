function getCorrectionTimeLine (timeLine, eventList) {
  eventList.forEach(function(eventItem) {
    var startIndex;
    timeLine.forEach(function(timeItem, index) {
      if (eventItem.startTime.getTime() === timeItem.time.getTime()) {
        startIndex = index;
      }
    });

    var end = timeLine[startIndex].top + eventItem.height;

    var endIndex;
    timeLine.some(function(timeItem, index) {
      if (eventItem.endTime.getTime() === timeItem.time.getTime()) {
        endIndex = index;
        return true
      }
      return false
    })

    var millisecondsToHour = 60 * 60 * 1000;
    var heightHour = eventItem.height / Math.abs(timeLine[startIndex].time - timeLine[endIndex].time);

    for(var i = startIndex + 1; i <= endIndex; i++) {
      var difference = Math.abs(timeLine[startIndex].time - timeLine[i].time);
      var height = timeLine[startIndex].top + difference * heightHour;
      if (timeLine[i].top < height) {
        timeLine[i].top = height
      }
    }

    heightHour = 100 / millisecondsToHour
    for(var i = endIndex + 1; i < timeLine.length; i++) {
      var difference = Math.abs(timeLine[endIndex].time - timeLine[i].time);
      var height = timeLine[endIndex].top + difference * heightHour;
      if (timeLine[i].top < height) {
        timeLine[i].top = height
      }
    }
  });
  return timeLine;
}

module.exports = getCorrectionTimeLine;