	export function dateFormatter(date) {
    return ('0' + date.getHours()).slice(-2) + ':' +
      ('0' + date.getMinutes()).slice(-2);
};
