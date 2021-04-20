describe("yearsAgo function",function(){
	it("the exesice should equal 20",function(){
		assert.equal(yearsAgo(2001),20)
	})

	it("The year 1976 should return 45",function(){
		assert.equal(yearsAgo(1976),45)
	})
})
