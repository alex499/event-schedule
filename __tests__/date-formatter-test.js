jest.dontMock('../src/date-formatter');
// replace require to import
const dateFormatter = require('../src/date-formatter').dateFormatter;

describe("dateFormatter", function() {
  it("time with one digit", function() {
    let dateString = dateFormatter(new Date(0,0,0,9,5));
    expect(dateString).toBe('09:05');
  });

  it("time with two digits", function() {
    let dateString = dateFormatter(new Date(0,0,0,11,33));
    expect(dateString).toBe('11:33');
  });

  it("not valid year", function() {
    let dateString = dateFormatter(new Date(0,0,0,10,30));
    expect(dateString).toBe('10:30');
  });

  it("valid year", function() {
    let dateString = dateFormatter(new Date(2015,12,12,10,30));
    expect(dateString).toBe('10:30');
  });

  it("date with seconds", function() {
    let dateString = dateFormatter(new Date(2015,12,12,10,30,40));
    expect(dateString).toBe('10:30');
  });

  it("two time with different dates", function() {
    let dateString1 = dateFormatter(new Date(2015,0,1,10,30));
    let dateString2 = dateFormatter(new Date(2015,12,12,10,30));
    expect(dateString1).toBe(dateString2);
  });

  it("date without time", function() {
    let dateString = dateFormatter(new Date(2015,12,1));
    expect(dateString).toBe('00:00');
  });

  it("empty params", function() {
    let dateString = dateFormatter();
    expect(dateString).toBe('');
  });

});
