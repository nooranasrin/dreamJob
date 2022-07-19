import { ObjectId } from 'mongodb';
import db from '../db.js';

export default {
  Query: {
    job: async (_, { id }) => {
      const jobsCollection = db.collection('jobs');
      const jobs = await jobsCollection
        .find({ _id: new ObjectId(id) })
        .toArray();
      return jobs.pop();
    },
    jobs: async () => {
      const jobs = db.collection('jobs');
      return await jobs.find({}).toArray();
    },
    company: async (_, { id }) => {
      const companiesCollection = db.collection('companies');
      const company = await companiesCollection
        .find({ _id: new ObjectId(id) })
        .toArray();
      return company.pop();
    },
  },
};
