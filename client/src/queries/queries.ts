import { gql } from '@apollo/client';

export const EXAMPLE = gql`
  query Example {
    example {
      id
      name
    }
  }
`;
