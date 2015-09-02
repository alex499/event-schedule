var assert = require('chai').assert
var timeList = require('./fixtures/time-list')


describe('Time list', function() {
  var events = require('./fixtures/events')
  var getTimeList = require('../src/time-list')
  
  it('should be have all points', function () {
    assert.typeOf(timeList, 'Array')
    assert.deepEqual(timeList, getTimeList(events));
  });
});

describe('Time line', function() {
  var timeLine = require('./fixtures/time-line')
  var getTimeLine = require('../src/time-line')

  it('should be have all points', function () {
    assert.typeOf(timeLine, 'Array')
    assert.deepEqual(timeLine, getTimeLine(timeList));
  });
});

describe('Corection time line', function() {
  var timeLine = require('./fixtures/time-line');
  var eventsList = require('./fixtures/events-list');
  var correctionTimeLine = require('./fixtures/correction-time-line');
  var getCorrectionTimeLine = require('../src/correction-time-line');
  it('should be correct time line', function () {
    var outTimeLine = getCorrectionTimeLine(timeLine, eventsList);
    assert.deepEqual(correctionTimeLine, outTimeLine);
  });
});

