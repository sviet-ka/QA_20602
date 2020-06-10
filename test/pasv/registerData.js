import faker from 'faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

const testUser = {
  firstName,
  lastName,
  email,
  password,
};

export default testUser;
