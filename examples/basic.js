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
        // widthTimeBlock: 33
        //heightHour: '50'
    });
});
