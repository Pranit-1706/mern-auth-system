import express from 'express';
import { Login, Signup } from '../controller/authController.js';
import { loginValidation, signupValidation } from '../middleware/authValidation.js';

const router = express.Router();

router.post('/register',signupValidation, Signup);

router.post('/login',loginValidation, Login);

export default router;