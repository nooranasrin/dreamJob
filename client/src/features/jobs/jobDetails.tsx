import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { JOB } from '../../queries/queries';

const JobDetails: React.FC = (): JSX.Element => {
  let { jobId } = useParams();

  const { loading, error, data } = useQuery(JOB, {
    variables: { jobId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className='bg-blue-500 h-44 rounded-bl-3xl z-0'></div>
    </>
  );
};

export default JobDetails;
