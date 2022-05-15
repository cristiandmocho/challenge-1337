import jsonwebtoken from 'jsonwebtoken';

export function Authenticate(req, res, next) {
  const { username } = req.body;

  try {
    if (!username) throw { code: 400, message: 'Missing "username" parameter' };
    if (username !== 'whatever') throw { code: 403, message: 'Invalid credentials' };

    // All good, issue a token
    const token = jsonwebtoken.sign({ username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

    res.auth_token = token;

    next();
  } catch (err) {
    res.status(err.code ?? 500).json(err);
  }
}

export function ValidateToken(req, res, next) {
  try {
    const authHeader = req.headers?.Authorization;
    if (!authHeader) throw { code: 401, message: 'User not authenticated' };

    const token = authHeader.replace('Bearer ', '');

    jsonwebtoken.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    res.status(err.code ?? 500).json(err);
  }
}
