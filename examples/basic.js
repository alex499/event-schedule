$(document).ready(function() {
    $('#schedule').schedule({
        data: function(callback) {
            callback({
                columns: scheduleColumn,
                events: scheduleData
            });
        }
        // widthTimeBlock: 33
        //heightHour: '50'
    });
});
