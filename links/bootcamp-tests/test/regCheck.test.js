describe("regCheck function", function(){
    it("Should return true if ends with GP",function(){
        assert.equal(regCheck("DC 55 YU GP","GP"),true);
        
    })

    it("Should return false if ends with Something else",function(){
        assert.equal(regCheck("DC 55 YU GJ","Gj"),false);
        
    })
})