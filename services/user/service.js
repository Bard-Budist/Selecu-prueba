import User from '../../models/user.model.js';

const createUser = async (userData) => {
  userData.permissions = [
    {
      route: '/home'
    }
  ];
  try {
    const user = new User(userData);
    await user.save();
    return {
      name: user.name,
      email: user.email,
      age: user.age
    }
  } catch (error) {
    return error;
  }
};

export {
  createUser
}
