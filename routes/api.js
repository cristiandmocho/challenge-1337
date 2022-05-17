import { Router } from 'express';
import {
  getCoworkerById,
  getCoworkerByName,
  getCoworkersCount,
  getCoworkersList,
  updateCoworker,
} from '../dtos/coworker.js';
import { Authenticate, ValidateToken } from '../middleware/auth.js';

const router = Router();

// public endpoint
router.post('/login', Authenticate, (_req, res) => {
  res.header('Content-type', 'plain/text').send(res.auth_token);
});

// private endpoints
router.get('/coworkers', ValidateToken, async (req, res) => {
  const { start, end, filter } = req.query;

  let rowCount = await getCoworkersCount();
  let data;

  if (!start && !end && !filter) data = await getCoworkersList();
  if (start && end) data = await getCoworkersList(start, end);
  if (filter) {
    data = await getCoworkerByName(filter);
    rowCount = data.length;
  }

  res.json({ data, totalLength: rowCount });
});

router.get('/coworker/:id', ValidateToken, async (req, res) => {
  const { id } = req.params;
  const data = await getCoworkerById(id);

  res.json(data);
});

const updateHandler = async (req, res) => {
  const data = req.body;
  const errors = {};

  if (!data?.id) errors.id = 'ID is required';
  if (!data?.name) errors.name = 'Name is required';
  if (!data?.city) errors.city = 'City is required';
  if (!data?.text) errors.text = 'Text is required';

  if (errors.id || errors.name || errors.city || errors.text) return res.status(400).json(errors);

  const coworker = { ...data };
  delete coworker.id;

  await updateCoworker(coworker, data.id);
  res.json({});
};

// Recommended verb for partial updates (PATCH)
router.patch('/coworker', ValidateToken, updateHandler);

// Note: POST is not the recommended verb to do UPDATE operations!
// This endpoint should be either PUT or PATCH
router.post('/coworker', ValidateToken, updateHandler);

export default router;
