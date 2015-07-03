'use strict';

export function dateFormatter(date) {
  let dateString = '';
  if (date) {
    dateString = ('0' + date.getHours()).slice(-2) + ':' +
      ('0' + date.getMinutes()).slice(-2);
  }
  return dateString;
};
