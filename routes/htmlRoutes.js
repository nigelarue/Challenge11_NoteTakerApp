const router = require('express').Router();
const path = require('path');

router.get('/notes', (_req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});
// Global routes
router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;