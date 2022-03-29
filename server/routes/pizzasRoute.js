const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizzaModel');

router.get('/getallpizzas', async (req, res) => {
	try {
		const pizzas = await Pizza.find({});
		res.send(pizzas);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.post('/addpizza', async (req, res) => {
	const pizza = req.body.pizza;
	try {
		const newPizza = new Pizza({
			name: pizza.name,
			image: pizza.image,
			varients: ['small', 'medium', 'large'],
			description: pizza.description,
			category: pizza.category,
			prices: [pizza.prices],
		});
		await newPizza.save();
		res.send('New Pizza Added Successfully');
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//pizza by id
router.post('/getpizzabyid', async (req, res) => {
	const pizzaid = req.body.pizzaid;
	try {
		const pizza = await Pizza.findById(pizzaid);
		res.send(pizza);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//pizza by name
router.post('/updatepizza', async (req, res) => {
	const updatedPizza = req.body.updatedPizza;
	try {
		const pizza = await Pizza.findByIdAndUpdate(
			updatedPizza._id,
			updatedPizza,
		);
		res.send(pizza);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete pizza
router.post('/deletepizza', async (req, res) => {
	const pizzaid = req.body.pizzaid;
	try {
		const pizza = await Pizza.findByIdAndDelete(pizzaid);
		res.send(pizza);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

module.exports = router;
