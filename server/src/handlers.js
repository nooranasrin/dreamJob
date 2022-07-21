import db from '../db.js';
import { ObjectId } from 'mongodb';

export const findCompany = async id => {
  const companiesCollection = db.collection('companies');
  const company = await companiesCollection
    .find({ _id: new ObjectId(id) })
    .toArray();
  return company.pop();
};

export const getJobs = async () => {
  const jobsCollection = db.collection('jobs');
  const jobs = await jobsCollection.find({}).toArray();
  return jobs.map(job => ({ ...job, company: findCompany(job.company) }));
};

export const getJob = async id => {
  const jobsCollection = db.collection('jobs');
  const jobs = await jobsCollection.find({ _id: new ObjectId(id) }).toArray();
  const job = jobs.pop();
  return { ...job, company: findCompany(job.company) };
};
