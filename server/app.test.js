// const request = require("supertest");
// const app = require("./app");

// describe("Testing For EndPoint Login", () => {
    // test("Login", async () => {
    //   const res = await request(app).post("/auth/login").send({
    //     email: "elbouhmydyabdelmoughit@gmail.com",
    //     password: "admin",
    //   });
    //   expect(res.body.message).toBe("Login Success");
    // });
//   test("add user", async () => {
//     const res = await request(app).post("/auth/add").send({
//       name: "admin",
//       email: "admin@gmail.com",
//     });
//     expect(res.text).toBe("User Created Success");
//   });
// });

// describe("Testing For EndPoint Organizme", () => {
//   test("Created Organizme", async () => {
//     const res = await request(app).post("/organizme/add").send({
//       name: "Test",
//     });
//     expect(res.text).toBe("Organizme Created Success");
//   });
//   test("Get All Organizme", async () => {
//     const res = await request(app).get("/organizme");
//     expect(res.body.success).toBe(true);
//   });
//   test("Get One Organizme", async () => {
//     const res = await request(app).get("/organizme/63bf0958d8b2967de9da898d");
//     expect(res.body.success).toBe(true);
//   });
//   test("Remove One Organizme", async () => {
//     const res = await request(app).delete(
//       "/organizme/remove/63c55ad5e9bb038860c8fda1"
//     );
//     expect(res.body.message).toBe("Organizme Deleted Success");
//   });
//   test("Update One Organizme", async () => {
//     const res = await request(app)
//       .post("/organizme/update/63bf09e9e4e3054853741739")
//       .send({
//         name: "1337",
//       });
//     expect(res.body.message).toBe("Update Success");
//   });
// });

// describe("Testing For EndPoint Formation", () => {
//   test("Created Organizme", async () => {
//     const res = await request(app).post("/formation/add").send({
//       name: "testing",
//       description: "lorem",
//       image: "242397-merida-brave-2560x1600.jpg",
//       dubet_date: "2023-01-13",
//       final_date: "2023-01-13",
//       organizme: "Amazon",
//     });
//     expect(res.text).toBe("Formation Created Success");
//   });
//   test("Get All Formation", async () => {
//     const res = await request(app).get("/formation");
//     expect(res.body.success).toBe(true);
//   });
//   test("Get One Formation", async () => {
//     const res = await request(app).get("/formation/63c3193eb3b3ac9cdc5c38c3");
//     expect(res.body.success).toBe(true);
//   });
//   test("Remove One Formation", async () => {
//     const res = await request(app).delete(
//       "/formation/remove/63c317273631bda86e23d2ac"
//     );
//     expect(res.body.message).toBe("Formation Deleted Success");
//   });
//   test("Update One Formation", async () => {
//     const res = await request(app)
//       .post("/formation/update/63c3193eb3b3ac9cdc5c38c3")
//       .send({
//         name: "test",
//         description: "lorem",
//         image: "242397-merida-brave-2560x1600.jpg",
//         dubet_date: "2023-01-13",
//         final_date: "2023-01-13",
//         organizme: "Meta",
//       });
//     expect(res.body.message).toBe("Update Success");
//   });
// });
