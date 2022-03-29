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

//add base
router.post('/addbase', async (req, res) => {
	const base = req.body.base;
	try {
		const newBase = new Bases({
			name: base.name,
			stock: base.stock,
			varients: ['small', 'medium', 'large'],
			prices: [base.prices],
		});
		await newBase.save();
		res.send('New Base Added Successfully');
		window.location.reload();
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.post('/getbasebyid', async (req, res) => {
	const baseid = req.body.baseid;
	try {
		const base = await Base.findById(baseid);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.post('/updatebase', async (req, res) => {
	const updatedBase = req.body.updatedBase;
	try {
		const base = await Base.findByIdAndUpdate(updatedBase._id, updatedBase);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

module.exports = router;
