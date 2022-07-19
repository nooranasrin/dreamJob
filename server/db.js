import { MongoClient } from 'mongodb';

const url = process.env.dbURL;
export const client = new MongoClient(url);
const dbName = process.env.dbName;

const connectToDB = async () => {
  await client.connect();
  console.log('Connected successfully to mongo server');
};

connectToDB();

export default client.db(dbName);
