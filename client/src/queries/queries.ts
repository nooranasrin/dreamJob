import { gql } from '@apollo/client';

export const JOBS = gql`
  query Jobs {
    jobs {
      _id
      description
      employmentType
      noOfVacancy
      postedTime
      role
      tags
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
