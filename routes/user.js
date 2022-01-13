import express from 'express';
import {
  createUser
} from '../services/user/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const userData = req.body;
  try {
    const response = await createUser(userData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(`Unknown error ${error.message}`);
  }
});

export default router;
