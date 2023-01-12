// const request = require("supertest");
// const app = require("./app");

// describe("Testing For EndPoint Login", () =>{
//   test("Login", async () => {
//     const res = await request(app).post("/auth/login").send({
//       email: "admin@gmail.com",
//       password: "admin"
//     })
//     expect(res.body.message).toBe("Login Success");
//   });
// })

// describe("Testing For EndPoint Organizme", () => {
//   test("Created Organizme", async () => {
//     const res = await request(app).post("/organizme/add").send({
//       name: "Jest"
//     });
//     expect(res.text).toBe("Organizme Created Success");
//   });
//   test("Get All Organizme", async () => {
//     const res = await request(app).get('/organizme')
//     expect(res.body.success).toBe(true);
//   });
//   test("Get One Organizme", async () => {
//     const res = await request(app).get('/organizme/63bf0958d8b2967de9da898d')
//     expect(res.body.success).toBe(true);
//   });
//   test("Remove One Organizme", async () => {
//     const res = await request(app).delete('/organizme/remove/63bd8b7cfc16b8338c99a1b9')
//     expect(res.body.message).toBe("Organizme Deleted Success");
//   });
//   test("Update One Organizme", async () => {
//     const res = await request(app).post("/organizme/update/63bf09e9e4e3054853741739").send({
//       name: "1337",
//     });
//     expect(res.body.message).toBe("Update Success");
//   });
// });
