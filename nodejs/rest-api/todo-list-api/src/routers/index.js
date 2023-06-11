const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Hello!! this is application todo-list');
    res.send('Hello!! this is application todo-list').status(200).end();
});

module.exports = router;