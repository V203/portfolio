describe("fromWhere function",function(){
    it("Expected CY 000 343 to equal Bellville",function(){
        assert.equal(fromWhere("CY 000 343"),"Bellville")
    })

    it("Expected CJ 768 989 to equal bellville",function(){
        assert.equal(fromWhere("CJ 768 989"),"Paarl")
    })

    it("Expected CA 757 987 to equal Cape Town",function(){
        assert.equal(fromWhere("CA 757 987"),"Cape Town")
    })
})