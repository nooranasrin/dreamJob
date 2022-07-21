import { gql } from '@apollo/client';

export const JOBS = gql`
  query Jobs {
    jobs {
      _id
      role
      description
      postedTime
      experience {
        start
        end
      }
      company {
        _id
        name
      }
      location {
        country
      }
    }
  }
`;

export const JOB = gql`
  query Job($jobId: ID!) {
    job(id: $jobId) {
      description
      employmentType
      experience {
        start
        end
      }
      location {
        city
        country
      }
      company {
        _id
        name
      }
      noOfVacancy
      postedTime
      role
      tags
      education
      nationality
      gender
      requirements
      department
    }
  }
`;
