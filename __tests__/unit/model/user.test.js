const request = require("supertest");
const { User } = require("../../../src/app/models");
const app = require("../../../src/app");
const truncate = require('../../utils/truncate');

describe('When User Creation is correct', () => {
  beforeEach( async () => {
    await truncate();
  });

  it('should return correct email', async () => {
    const user = await User.create({
      name: "Eliel",
      email: "eliel@gmail.com",
      password_hash: "123123123"
    });
    expect(user.email).toBe('eliel@gmail.com');
  });

  it('should have one user create', async () => {
    const user = await User.create({
      name: "Eliel",
      email: "eliel@gmail.com",
      password_hash: "123123123"
    });

    const users  = await User.count();
    
    expect(users).toBe(1);
  });

});
