const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
	it("should return 200 and Hello Mohit!", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toBe(200);
		expect(res.text).toBe("Hello Mohit!");
	});

	it("should not match wrong text", async () => {
		const res = await request(app).get("/");
		expect(res.text).not.toBe("Hello World!");
	});
});
