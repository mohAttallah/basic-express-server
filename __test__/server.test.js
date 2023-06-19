"use strict";

const request = require("supertest");
const { app } = require("../server");


describe("server test", () => {
  it("responds with 404", async () => {
    const response = await request(app).get("/anything");
    expect(response.status).toBe(404);
  });

  it("responds with welcome message and user agent on /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("responds with the name query parameter on /person", async () => {
    const name = "Mohamad";
    const response = await request(app).get(`/person?name=${name}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      code: 200,
      name: name,
    });
  });
});

