import { Router } from 'express';
import { Authenticate, ValidateToken } from '../middleware/auth.js';

const router = Router();

// public endpoint
router.post('/login', Authenticate, (_req, res) => {
  res.json({ auth_token: res.auth_token });
});

// private endpoints
router.get('/coworkers', ValidateToken, (req, res) => {});
router.get('/coworker/:id', ValidateToken, (req, res) => {});

export default router;
