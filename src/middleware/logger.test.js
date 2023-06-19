"use strict";
const request = require("supertest");
const { app } = require("./../../server");

describe("logger middleware", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it("logs the request method and path", async () => {
    const response = await request(app).get("/");

    expect(consoleLogSpy).toHaveBeenCalledWith("REQUEST: GET /");
    expect(response.statusCode).toBe(200);
  });
});

