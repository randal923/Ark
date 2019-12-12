const transporter = require('nodemailer').createTransport(require('../config/email'));
const { store } = require('../config/index');
const moment = require('moment');

const _send = ({ subject, emails, message }, cb = null) => {
	const mailOptions = {
		from: 'no-response@store.com',
		to: emails,
		subject: subject,
		html: message,
	};

	if (process.env.NODE_ENV === 'production') {
		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.warn(error);
				if (cb) return cb(error);
			} else {
				if (cb) return cb(null, true);
			}
		});
	} else {
		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.warn(error);
				if (cb) return cb(error);
			} else {
				if (cb) return cb(null, true);
			}
		});
		/*
        console.log(mailOptions);
        if(cb) return cb(null, true);
        */
	}
};

// NEW ORDER
const sendNewOrder = ({ user, order }) => {
	const message = `
    <h1 style="text-align:center;">Order Received</h1>
    <br />
    <p> Order ${moment(order.createdAt).format('DD/MM/YYYY')}, successfully received.</p>
    <br />
    <a href="${store}">Ark</a>
    <br /><br />
    <p>The Ark Team</p>
`;
	_send({
		subject: 'Order Received - Ark',
		emails: user.email,
		log: console.log(message),
		message,
	});
};

// ORDER CANCELLED
const cancelOrder = ({ user, order }) => {
	const message = `
    <h1 style="text-align:center;">Your Order Has Been Cancelled</h1>
    <br />
    <p>O Order ${moment(order.createdAt).format('DD/MM/YYYY')} was cancelled.</p>
    <br />
    <a href="${StorageEvent}">Ark</a>
    <br /><br />
    <p>The Ark Team</p>
`;
	_send({
		subject: 'Cancelled Order - Ark',
		emails: user.email,
		message,
	});
};

// PAYMENT AND DELIVERY UPDATE
const updateOrder = ({ user, order, status, date }) => {
	const message = `
    <h1 style="text-align:center;">Order Updated</h1>
    <br />
    <p>Order ${moment(order.createdAt).format('DD/MM/YYYY')} was updated.</p>
    <br />
    <p> New update: ${status} - ${moment(date).format('DD/MM/YYYY HH:mm')}</p>
    <br />
    <a href="${store}">Ark</a>
    <br /><br />
    <p>Team Ark</p>
`;
	_send({
		subject: 'Order Updated - Ark',
		emails: user.email,
		message,
	});
};

// PAYMENT AND DELIVERY UPDATE
const completeOrder = ({ user, order, status, date }) => {
	const message = `
    <h1 style="text-align:center;">Order Complete</h1>
    <br />
    <p>Order ${moment(order.createdAt).format('DD/MM/YYYY')} was completed.</p>
    <br />
    <p> New update: ${status} - ${moment(date).format('DD/MM/YYYY HH:mm')}</p>
    <br />
    <a href="${store}">Ark</a>
    <br /><br />
    <p>Team Ark</p>
`;
	_send({
		subject: 'Order Completed - Ark',
		emails: user.email,
		message,
	});
};

module.exports = { sendNewOrder, cancelOrder, updateOrder, completeOrder };
