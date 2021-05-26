import express from 'express';

import { sendSMS , sendWhatsapp , sendEmail , getHomePage } from '../handlers/index.js';

const router = express.Router();

router.get('/', getHomePage);
router.get('/sendsms', sendSMS);
router.get('/sendwhatsapp', sendWhatsapp);
router.get('/sendemail', sendEmail );


export default router;