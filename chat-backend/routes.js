const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/`, (req, res) => {
  res.send(`hi`)
}) 

router.get(`/json`, (req, res) => {
  res.json({
    message: `hi`,
    numbers: [1, 2, 3]
  })
})

router.get(`/echo/:message`, (req, res) => {
  const input = req.params.message;
  res.json({
    normal: input,
    shouty: input.toUpperCase(),
    charCount: input.length,
    backwards: input.split(``).reverse().join(``)
  })
})

router.get(`/chat`, (req, res) => {
  res.sendFile(path.join(__dirname, `../chat-frontend/build/index.html`))
})

module.exports = router;