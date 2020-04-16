const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
	res.render('logged');
});

router.get('/no-permission', (req, res) => {
	res.render('noPermission');
});

router.get('/profile', (req, res) => {
	if (req.user) {
		res.render('userProfile');
	} else {
		res.render('noPermission');
	}
});

router.get('/profile/settings', (req, res) => {
	if (req.user) {
		res.render('userSettings');
	} else {
		res.render('noPermission');
	}
});

module.exports = router;
