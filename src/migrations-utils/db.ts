import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const getDb = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  return client.db();
};

export { getDb };
