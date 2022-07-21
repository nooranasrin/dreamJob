import { findCompany, getJob, getJobs } from './handlers.js';

export default {
  Query: {
    job: async (_, { id }) => getJob(id),
    jobs: getJobs,
    company: async (_, { id }) => findCompany(id),
  },
};
