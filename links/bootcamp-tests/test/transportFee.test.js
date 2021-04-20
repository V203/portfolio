describe("transportFee function",function() {
    it("Should return a fee R20 during the morning",function(){
        assert.equal(transportFee("morning"),"R20");
    })
    it("Should return a fee R10 during afternoon",function(){
        assert.equal(transportFee("afternoon"),"R10");
    })

    it("Should return a fee 'free' during the nightshift",function(){
        assert.equal(transportFee("nightshift"),"free");
    })
})