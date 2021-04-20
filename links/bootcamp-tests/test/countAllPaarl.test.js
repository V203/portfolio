describe("countAllPaarl function",function(){
   
    it("Should return 3 for CJ locations",function(){
        assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),3);

    });
    
    it("Should return 2 if there is only two CJ's  ",function(){
        assert.equal(countAllPaarl("CJ 345 123, CG 2345, CJ 123-546"),2);

    });
        
    
    
});