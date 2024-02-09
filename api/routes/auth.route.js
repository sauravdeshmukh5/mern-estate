import express from 'express'
import { google, signout, singin, singup } from '../controllers/auth.controller.js';

const router =express.Router();

router.post('/signup',singup)
router.post('/signin',singin)
router.post('/google',google)
router.get('/signout',signout)

export default router;