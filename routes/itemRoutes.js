const express = require('express');
const { viewItem, addItem, viewItems } = require('../controllers/items');

const router = express.Router();

router.post('/', addItem);
router.get('/', viewItems);
router.get('/:id', viewItem);

module.exports = router;