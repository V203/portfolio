describe('findItemsOver' , function(){
    it('Should pass with parsing array of objects' , function(){
       

        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 20),
        
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

    it('Should pass with parsing a varible that holds an array of objects' , function(){
       
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual(findItemsOver(itemList, 20),
        
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

});