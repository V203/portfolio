describe("countRegNumber function",function(){
   var regNum=" CA 778 455, CA 889 453"
    it("Takes in a a string and spllits it and returns 2",function(){
        assert.equal(count(regNum),2);
    })

        
    it("Should split string into a array of String  and return length of array ",function(){
        assert.equal(count("CA 223 332, CY 322 223, CL332 332, CA 778 455, CA 889 453"),5);
    })
})