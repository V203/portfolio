describe('findItemsOver20 function', function(){
    it('Finds item objects are above 20 units.' , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual(findItemsOver20(itemList, 20),
        
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

    it('Should pass with only taking one param' , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual(findItemsOver20( itemList),

        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
        
        
    });

        

});