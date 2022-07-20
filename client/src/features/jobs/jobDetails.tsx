import { useQuery } from '@apollo/client';
import moment from 'moment';
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

  const { role, company, postedTime } = data.job;

  return (
    <>
      <div className='bg-blue-500 h-44 rounded-bl-3xl z-0'></div>
      <div className='w-6/12 m-auto'>
        <div className='bg-white m-auto -mt-24 p-4 rounded-xl shadow-lg'>
          <div className='font-semibold text-xl text-slate mb-2'>{role}</div>
          <div className='font-semibold text-base text-slate-400 mb-2'>
            {company.name}
          </div>
          <div className='text-xs text-slate-500 mb-4'>
            Posted on {moment(postedTime.toString(), 'YYYYMMDD').fromNow()}
          </div>
          <button className='rounded-3xl bg-blue-500 w-28 text-white h-10'>
            Easy Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
