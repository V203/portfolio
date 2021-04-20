describe("isFromBellville function",function(){

    it("Should return true if starts with CY",function(){
        assert.equal(isFromBellville("CY 665 986"),true);
    })

    it("Should return false not equal 'CY'",function(){
        assert.equal(isFromBellville("CD 575 870") ,false)
    })
})