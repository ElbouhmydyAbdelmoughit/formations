const request = require('supertest')
const app = require('./app')


// describe("Testing For EndPoint Organizme", () =>{
//   test("Created Organizme", async () => {
//     const res = await request(app).post("/organizme/add").send({
//       name: "Jest"
//     });
//     expect(res.text).toBe("Organizme Created Success");
//   });
// })