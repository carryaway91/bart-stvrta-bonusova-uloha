const { getUser, postUser, updateUser, deleteUser } = require("../app/app");
describe("User API suite", () => {
  test("Should get valid user", async () => {
    const person = await getUser(1);
    expect(person.first_name).toBe("George");
    expect(person.last_name).toBe("Bluth");
    expect(person.email).toBe("george.bluth@reqres.in");
  });

  test("Should throw 404 not found for invalid user", async () => {
    const person = await getUser(232222222222222222222);
    expect(person).toEqual(Error("User not found"));
  });

  test("Should create new person with name and job", async () => {
    const person = { name: "Random User", job: "Programmer" };
    const response = await postUser(person);
    expect(response.status).toBe(201);
    expect(response.data.name).toBe("Random User");
    expect(response.data.job).toBe("Programmer");
  });

  test("Should update existing user", async () => {
    const updatedPerson = { name: "Morpheus", job: "Programmer" };

    const response = await updateUser(updatedPerson, 2);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("Morpheus");
    expect(response.data.job).toBe("Programmer");
  });

  test("Should delete an existing person", async () => {
    const response = await deleteUser(2);
    expect(response).toBe(204);
  });
});
