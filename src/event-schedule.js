(function ($) {
  'use strict';
  $.fn.schedule = function (option) {
    var millisecondsToHour = 60 * 60 * 1000;
    var api;

    // timeline
    var dateFormatter = function (date) {
      return ('0' + date.getHours()).slice(-2) + ':' +
        ('0' + date.getMinutes()).slice(-2);
    };

    var drawTimeLine = function (timeLine, dateFormatter, position) {
      var result = '<div class="schedule__timeline--' + position + '">';
      timeLine.slice(0, -1).forEach(function (time) {
        result += '<div class="schedule__time"' +
          'style="height:' + time.height + '">' +
          dateFormatter(time.time) + '</div>';
      });
      return result + '</div>';
    };

    var getTimeLine = function (events) {
      var timeLine = [];
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

      timeList.reduce(function (previousValue, currentValue) {
        var difference;
        var height;
        difference = Math.abs(previousValue - currentValue);
        height = difference * (api.heightHour / millisecondsToHour);
        timeLine.push({
          time: previousValue,
          height: height + 'px'
        });
        return currentValue;
      });
      timeLine.push({
        time: timeList[timeList.length - 1],
        height: 'auto'
      });
      return timeLine;
    };


    //title
      var drawTitles = function (columns, titleFormatter) {
      var title = '<div class="schedule__titles">';
      var widthTitle = api.widthTimeBlock;
      columns.forEach(function (column) {
        title += '<div class="schedule__title"' +
          'style="width:' + widthTitle + 'px;">' +
          titleFormatter(column) + '</div>';
      });
      return title + '</div>';
    };

    var titleFormatter = function (column) {
      return '<div>' + column.title + '</div>';
    };


    // events
    var eventsFormatter = function (event) {
      return '<div>' + event.startTime.getHours() + ':' +
        event.startTime.getMinutes() + ' - ' +
        event.endTime.getHours() + ':' +
        event.endTime.getMinutes() + '</div>' +
        '<div>' + event.data.title + '</div>' +
        '<div>' + event.data.text + '</div>';
    };

    var drawEvents = function (events, timeLine, eventsFormatter) {
      var result = document.createElement('div');
      var height = getTimeLineHeight(timeLine);
      result.className = 'schedule__events';
      result.style.height = height;
      events.forEach(function (event) {
        var position = getEventPosition(event, timeLine);
        var eventItem = document.createElement('div');
        eventItem.style.position = 'absolute';
        eventItem.style.top = position.top;
        eventItem.style.bottom = position.bottom;
        eventItem.style.left = position.left;
        eventItem.style.width = api.widthTimeBlock;
        eventItem.innerHTML = eventsFormatter(event);
        result.appendChild(eventItem);
      });

      return result;
    };

    var getEventPosition = function (event, timeLine) {
      var position = {};
      position.left = getLeftEventPosition(event.column);
      position.top = getTopEventPosition(event, timeLine);
      position.bottom = getBottomEventPosition(event, timeLine);
      return position;
    };
    var getLeftEventPosition = function (column) {
      var result;
      var width = api.widthTimeBlock;
      result = width * (column - 1) + 'px';
      return result;
    };
    var getTopEventPosition = function (event, timeLine) {
      var startEventTime = event.startTime;
      var beginTime = timeLine[0].time;
      var difference = startEventTime - beginTime;
      var top = difference * (api.heightHour / millisecondsToHour);
      return top + 'px';
    };
    var getBottomEventPosition = function (event, timeLine) {
      var endEventTime = event.endTime;
      var endTime = timeLine[timeLine.length - 1].time;
      var difference = endTime - endEventTime;
      var bottom = difference * (api.heightHour / millisecondsToHour);
      return bottom + 'px';
    };

    //data

    var getTimeLineHeight = function (timeline) {
      var start = timeline[0].time;
      var end = timeline[timeline.length - 1].time;
      var difference = end - start;
      var height = difference * (api.heightHour / millisecondsToHour);
      return height;
    };

    var drawSchedule = function (data) {
      var timeLine = getTimeLine(data.events);
      var eventsHtml = document.createElement('div');
      var titleHtml = '';
      var timeLineLeftHtml = '';
      var timeLineRightHtml = '';
      var margin = 'style="';

      if (api.timeLineRight) {
        timeLineRightHtml = drawTimeLine(timeLine, api.dateFormatterRight, 'right');
        margin += 'margin-right:' + api.timeLineWidth + 'px;';
      }
      if (api.timeLineLeft) {
        timeLineLeftHtml = drawTimeLine(timeLine, api.dateFormatterLeft, 'left');
        margin += 'margin-left:' + api.timeLineWidth + 'px;';
      }
      if (api.title) {
        titleHtml = drawTitles(data.columns, api.titleFormatter);
      }
      margin += '"';
      eventsHtml.appendChild(drawEvents(data.events, timeLine, api.eventsFormatter));
      schedule.html('<div class="schedule">' + timeLineLeftHtml + '<div class="schedule__events-container" ' + margin + '>' + titleHtml + eventsHtml.innerHTML + '</div>' + timeLineRightHtml + '</div>');
    };

    var schedule = $(this);
    api = $.extend({
      titleFormatter: titleFormatter,
      dateFormatterLeft: dateFormatter,
      dateFormatterRight: dateFormatter,
      eventsFormatter: eventsFormatter,
      heightHour: 100,
      widthTimeBlock: 300,
      title: false,
      timeLineLeft: true,
      timeLineRight: true,
      timeLineWidth: 40,
    }, option);

    var data = api.data(drawSchedule);


    this.getTimeLine;
    return this;
  };
})(jQuery);
