import express from 'express';
import path from 'path';
import payload from 'payload';

require('dotenv').config({
	path: path.resolve(__dirname, '../.env'),
});

const app = express();

// Redirect all traffic at root to admin UI
app.get('/', function (_, res) {
	res.redirect('/admin');
});

const start = async () => {
	// Initialize Payload
	await payload.initAsync({
		secret: process.env.PAYLOAD_SECRET_KEY,
		mongoURL: process.env.MONGO_URL,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);

			// Clear and reset database on server start
			// NOTE - this is only for demo purposes and should not be used
			// for production sites with real data
			// await seed();
		},
	});

	// Seed database with startup data
	// resetScheduledJob.start();

	// Add your own express routes here
	app.listen(process.env.PORT, async () => {
		console.log(`Express is now listening for incoming connections on port ${process.env.PORT}.`);
	});

}

start();
