
    describe("Setting and getting the values from user input", function () {



        it("Should set a name in the object array return the size of equal to 1", function () {
            let _grt = grt();
            _grt.setNames("Vuyisa")
            assert.equal(1, _grt.getGreetCtr());
        })
        it("If same name is set twice the counter should not increase the _grt.getGreetCtr should be equal to 1.", function () {
            let _grt = grt();
            _grt.setNames("Vuyisa")
            _grt.setNames("Vuyisa")
            assert.equal(1, _grt.getGreetCtr());

        })
        it("It should greet user in the Japanesse language", function () {
            let _grt = grt()
            _grt.setNames("Vuyisa")
            assert.equal(_grt.action("japanese", "Vuyisa"), "Konnichiwa, Vuyisa");

        })
        it("It should greet user in the Latin language", function () {
            let _grt = grt()
            _grt.setNames("vuyisa")
            assert.equal(_grt.action("latin", "Vuyisa"), "Salve, Vuyisa");

        })

        it("The user should be greeted in isiVenda language", function () {
            let _grt = grt()
            _grt.setNames("vuyisa")
            assert.equal(_grt.action("venda", "Vuyisa"), "Ndaa, Vuyisa");

        })
        it("It should return keys and there values in the object array", function () {
            let _grt = grt()
            _grt.setNames("Jake")
            _grt.setNames("Mat")
            _grt.setNames("luke")
            assert.deepEqual(_grt.greeted(), { Jake: 0, Mat: 0, Luke: 0 })
        })
        it("It should return the list of all the people greeted eg. blake, sam, james", function () {
            let _grt = grt();
            _grt.setNames("blake")
            _grt.setNames("sam")
            _grt.setNames("james")
            assert.equal(_grt.showAllGreets(), 'You have greeted -->: Blake,Sam,James')



        })



    })


describe("User error detection ", function () {


    it("After greeting Sam ,Samuel and Steve the test should display all the names greeted. ", function () {
        let _grt = grt();
        _grt.setNames("Sam");
        _grt.setNames("Samuel");
        _grt.setNames("Steve");

        assert.deepEqual(_grt.getGreetKeys(), ["Sam", "Samuel", "Steve"])

    })

    it("Error message should pop up if the user the clicks the greet button before entering their name in the text field.", function () {
        let _grt = grt()
        let str = "";
        assert.equal(_grt.antiEmpty(str), "Please enter your name in text field eg. 'Sam', then click the greet button to be greeted.")
    })


    it("It should return a warning message if user clicks the show all button without greeting A name first.", function () {
        let _grt = new grt();
        assert.equal(_grt.showAllGreets(), 'Enter names in the text field and click the show all button to display all the naems you have greeted.')
    })



    
    it("It should return true if Digits exist in the string varible 'numAlpha'.", function () {
        let _grt = grt();
        let numAlpha = "hello11"
        assert.equal(!!_grt.antiDigit(numAlpha), true)
    })
    it("It should return false if Digits do not exist in the string variable 'numAlpha", function () {
        let _grt = grt();
        let numAlpha = "hello1"
        assert.equal(!_grt.antiDigit(numAlpha), false)
    })


})
