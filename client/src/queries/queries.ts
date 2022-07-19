import { gql } from '@apollo/client';

export const JOBS = gql`
  query Jobs {
    jobs {
      id
      description
      employmentType
      noOfVacancy
      postedTime
      role
      tags
      company {
        id
        name
      }
      location {
        country
      }
    }
  }
`;
