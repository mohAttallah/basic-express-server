const request = require("supertest");


const { app } = require("./../../server");

describe("validator test  ", () => {
  it("returns a 500 error response when name is missing", async () => {
    const response = await request(app).get("/person");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      code: 500,
      message: "Please insert your name Correctly",
    });
  });

  it("proceeds to the next middleware when name is provided", async () => {
    const name = "Mohammad";
    const response = await request(app).get(`/person?name=${name}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      code: 200,
      name: name,
    });
  });
});
