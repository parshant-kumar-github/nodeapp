import express from 'express';
import { sendSMS , sendWhatsapp , sendEmail , HomePage , protectedRoute , authFailure , logout } from '../handlers/index.js';
import authMiddleware from '../middleware/auth.js';
const router = express.Router();

router.get('/', HomePage);
router.get('/sendsms',authMiddleware , sendSMS);
router.get('/sendwhatsapp', authMiddleware , sendWhatsapp);
router.get('/sendemail', authMiddleware , sendEmail );
router.get('/auth/google/failure', authFailure);
router.get('/logout', authMiddleware ,logout);
router.get('/protected', authMiddleware ,protectedRoute);

export default router;