import React from 'react';
import { useQuery } from '@apollo/client';
import { EXAMPLE } from './queries/queries';

const App: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(EXAMPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='mt-12' key={data.example.id}>
      <p>name: {data.example.name}</p>
    </div>
  );
};

export default App;
