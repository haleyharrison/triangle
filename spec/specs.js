describe('triangle', function() {
    it("is true for a triangle where all sides are equal", function(){
    expect(triangle(2,2,2)).to.equal(true);
  });

    it("is true for a triangle where two sides are equal", function(){
      expect(triangle(2,2,3)).to.equal(true);
    });

    it("is true for a triangle where no sides are equal", function(){
      expect(triangle(2,5,3)).to.equal(true);
    });
});
