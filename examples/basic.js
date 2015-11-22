$(document).ready(function() {
    $('#schedule').schedule({
        data: function(callback) {
            callback({
                columns: scheduleColumn,
                events: scheduleData
            });
        },
        timeLineLeft: true,
        timeLineRight: true,
        timeLineFill: true,
        timeStart: 9,
        timeEnd: 22,
        timeDelta: 30,
        // widthTimeBlock: 33
        //heightHour: '50'
    });
});
