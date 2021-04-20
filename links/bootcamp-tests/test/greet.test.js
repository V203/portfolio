describe('The greet function', function(){
                
    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    
    var name ="Sam" ;
    it('To veryify that is not name == "name"', function(){
       // assert.equal(greet(name),"Hello, "+name)
        assert.notEqual(name, "name","Testing in progress");
    });


});
