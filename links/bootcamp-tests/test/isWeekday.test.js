describe("isWeekday function",function(){
	it("The function should true for all weekdays",function(){
		assert.equal(isWeekday("Monday"),true)
	})
	

	it("The function should return false for Saturday",function(){
		assert.equal(isWeekday("Saturday"),false)
	})

	it("The function should return false for Sunday",function(){
		assert.equal(isWeekday("Sunday"),false)
	})
})