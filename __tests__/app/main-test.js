const FILE = "../../www/app/main";

jest.dontMock(FILE)
jest.autoMockOff();

//jest.setMock("../../www/app/messages", {
//	getHello: function () {
//		return "hello world";
//	}
//});

describe([
	"app/main.js"
].join(" ")
, function () {
	it([
		"should be testable with jest"
	].join(" ")
	, function () {
		const greeting = require(FILE);


		expect(greeting).toBe("Hello World");
	});
});
