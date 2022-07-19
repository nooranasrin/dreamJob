import React from 'react';
import { useQuery } from '@apollo/client';
import { EXAMPLE } from './queries/queries';
import Jobs from './features/jobs/jobs';

const App: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(EXAMPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Jobs />;
};

export default App;
