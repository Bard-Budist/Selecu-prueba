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
    return user;
  } catch (error) {
    return error;
  }
};

const login = async (email) => {
  try {
     const user = await User.findOne({email}).exec();
     if (user) {
       return {
         login: true,
	 user
       }
     } else {
       return {
	 login: false
       }
     }
  } catch (error) {
    return error;
  }
}

const updateUser = async (userData) => {
  try {
    const user = await User.findOne({ email: userData.email });
    if (user) {
      user.name = userData.name;
      user.age = userData.age;
      await user.save();
      return user;
    }
    return null;
  } catch (error) {
    return error;
  }
};


export {
  createUser,
  login,
  updateUser,
}

