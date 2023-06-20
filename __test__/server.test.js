"use strict";

const supertest = require("supertest");
const { app } = require("../server");
const request = supertest(app);

describe("server test", () => {
  it("respons  404 with wrong route ", async () => {
    const response = await request.get("/bad route");
    expect(response.status).toBe(404);
  });

  it("should respons  with 404 on a bad method", async () => {
    const response = await request.post("/person");
    expect(response.status).toBe(404);
  });
  it("should respons  with 404 on a bad method", async () => {
    const response = await request.delete("/person");
    expect(response.status).toBe(404);
  });

  it("respons 500 if no name in the query string", async () => {
    const response = await request.get("/person");
    expect(response.status).toBe(500);
  });

  it("respons with welcome message and user agent on /", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  it("respons with the name query parameter on /person", async () => {
    const name = "Mohamad";
    const response = await request.get(`/person?name=${name}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      code: 200,
      name: name,
    });
  });
});
