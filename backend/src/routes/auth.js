import express from 'express';
import { body } from 'express-validator';
import * as authController from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const signupValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('name').trim().notEmpty()
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
];

// Auth routes
router.post('/signup', signupValidation, authController.signup);
router.post('/login', loginValidation, authController.login);
router.post('/github', authController.githubAuth);
router.post('/verify-email', authController.verifyEmail);
router.post('/forgot-password', body('email').isEmail(), authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.get('/validate', protect, authController.validateToken);
router.post('/logout', protect, authController.logout);

export default router;
