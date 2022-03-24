const express = require('express');
const router = express.Router();
const Bases = require('../models/bases');
const Sauce = require('../models/sauces');
const Toppings = require('../models/toppings');
const Cheese = require('../models/cheese');

router.get('/getallbases', async (req, res) => {
	try {
		const bases = await Bases.find({});
		res.send(bases);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.get('/getallcheese', async (req, res) => {
	try {
		const cheese = await Cheese.find({});
		res.send(cheese);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.get('/getallsauces', async (req, res) => {
	try {
		const sauces = await Sauce.find({});
		res.send(sauces);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.get('/getalltoppings', async (req, res) => {
	try {
		const toppings = await Toppings.find({});
		res.send(toppings);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

module.exports = router;
