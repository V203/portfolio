describe("totalPhoneBill function",function(){
    it("Should return 'R7.45'",function(){
            var _pb =["call" ,"sms", "call", "sms", "sms"];
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"),"R7.45")
    })

    it("Should should take in variable that holds a string  and return 'R7.45'",function(){
        var _pb ="call, sms, call, sms, sms"
        assert.equal(totalPhoneBill(_pb),"R7.45")
})
})