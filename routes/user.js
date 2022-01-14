import express from 'express';
import {
  createUser,
  login,
  updateUser,
} from '../services/user/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const userData = req.body;
  try {
    const response = await createUser(userData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(`Unknown error ${error}`);
  }
});

router.post('/login', async (req, res) => {
  const {
    email,
  } = req.body;
  try {
    const response = await login(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(`Unknown error ${error}`);
  }
});

router.put('/', async (req, res) => {
  const userData = req.body;
  try {
    const response = await updateUser(userData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(`Unknown error ${error}`);
  }
});



export default router;
