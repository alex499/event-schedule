(function() {

  describe('API', function () {

    describe('disable()', function () {
      var test;

      before(function () {
        test = setup_test('<select tabindex="4">', {});
        expect(String(test.selectize.$control_input.attr('tabindex'))).to.be.equal('4');
        test.selectize.disable();
      });
      it('should set "tabindex" prop to -1', function () {
        expect(String(test.selectize.$control_input.attr('tabindex'))).to.be.equal('-1');
      });
      it('should set "disabled" class', function () {
        expect(test.selectize.$control.hasClass('disabled')).to.be.equal(true);
      });
      it('should set isDisabled property to true', function () {
        expect(test.selectize.isDisabled).to.be.equal(true);
      });
      it('should add "disabled" attribute on inputs', function () {
        expect(test.selectize.$input.is(':disabled')).to.be.equal(true);
        expect(test.selectize.$control_input.is(':disabled')).to.be.equal(true);
      });
    });
  });
});
