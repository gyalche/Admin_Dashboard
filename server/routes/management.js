import express from 'express';
import { getAdmins } from '../controllers/management.js';
const router = new express.Router();

router.get('/admins', getAdmins);
export default router;
