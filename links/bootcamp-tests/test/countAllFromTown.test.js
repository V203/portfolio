describe("countAllFromTown function",function(){
    it("Should return true if sarts with CA",function(){
        assert.equal(isFromCapeTown("CA 223 233"),true);
    })

    it("Should return false if starts anything else",function(){
        assert.equal(isFromCapeTown("CD 223 332"),false);
    })
    
})