import mongoose, { Mongoose } from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = {
		conn: null,
		promise: null
	};
}

export const connectToDatabase = async () => {
	if (cached.conn) return cached.conn;

	if (!DATABASE_URL) throw new Error('Missing DATABASE_URL');

	cached.promise =
		cached.promise ||
		mongoose.connect(DATABASE_URL, {
			dbName: 'agentsBook',
			bufferCommands: false
		});

	cached.conn = await cached.promise;

	return cached.conn;
};
