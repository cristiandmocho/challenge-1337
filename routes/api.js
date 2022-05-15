import { Router } from 'express';
import { getCoworkerById, getCoworkerByName, getCoworkersCount, getCoworkersList } from '../dtos/coworker.js';
import { Authenticate, ValidateToken } from '../middleware/auth.js';

const router = Router();

// public endpoint
router.post('/login', Authenticate, (_req, res) => {
  res.json({ auth_token: res.auth_token });
});

// private endpoints
router.get('/coworkers', ValidateToken, async (req, res) => {
  const { start, end, filter } = req.params;
  let data;

  const rowCount = await getCoworkersCount();

  if (!start && !end && !filter) data = await getCoworkersList();
  if (start && end) data = await getCoworkersList(start, end);
  if (filter) data = await getCoworkerByName(filter);

  res.json({ data, totalLength: rowCount });
});

router.get('/coworker/:id', ValidateToken, async (req, res) => {
  const { id } = req.params;
  const data = await getCoworkerById(id);

  res.json(data);
});

const updateHandler = (req, res) => {};

// Recommended verb for partial updates (PATCH)
router.patch('/coworker', ValidateToken, updateHandler);

// Note: POST is not the recommended verb to do UPDATE operations!
// This endpoint should be either PUT or PATCH
router.post('/coworker', ValidateToken, updateHandler);

export default router;
