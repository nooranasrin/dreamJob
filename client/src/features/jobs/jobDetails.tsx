import { useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  JobAttribute,
  PrimaryButton,
  SecondaryButton,
  Title,
} from '../../components/commonComponents';
import ListItems from '../../components/ListItems';
import { JOB } from '../../queries/queries';

const JobDetails: React.FC = (): JSX.Element => {
  let { jobId } = useParams();

  const { loading, error, data } = useQuery(JOB, {
    variables: { jobId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { job } = data;

  return (
    <>
      <div className='bg-blue-500 h-44 rounded-bl-3xl z-0'></div>
      <div className='w-6/12 m-auto'>
        <div className='bg-white m-auto -mt-24 p-4 rounded-xl shadow-lg'>
          <div className='font-semibold text-xl text-slate mb-2'>
            {job.role}
          </div>
          <div className='font-semibold text-base text-slate-400 mb-2'>
            {job.company.name}
          </div>
          <div className='text-xs text-slate-500 mb-4'>
            Posted on {moment(job.postedTime.toString(), 'YYYYMMDD').fromNow()}
          </div>
          <PrimaryButton text='Easy Apply' />
        </div>
        <div className='bg-white m-auto mt-8 p-4 rounded-lg shadow-lg text-xs font-bold'>
          <div className='flex justify-between flex-wrap text-slate-500'>
            <JobAttribute
              attribute='Experience'
              value={`${job.experience.start} - ${job.experience.end} Years`}
            />
            <JobAttribute
              attribute='Job Location'
              value={`${job.location.city} - ${job.location.country}`}
            />
            <JobAttribute attribute='Education' value={job.education} />
            <JobAttribute attribute='Nationality' value={job.nationality} />
            <JobAttribute attribute='Gender' value={job.gender} />
            <JobAttribute attribute='Vacancy' value={job.noOfVacancy} />
          </div>

          <div>
            <Title title='Job Description' />
            <div className='text-sm font-normal text-slate-500 pr-16'>
              {job.description}
            </div>
          </div>

          <div>
            <Title title='Requirements' />
            <ListItems items={job.requirements} />
          </div>

          <div>
            <Title title='Company Industry' />
            {job.company.industries.map((industry: string, index: number) => (
              <button key={index} className='font-normal text-sm text-blue-500'>
                {industry}
                {index !== job.company.industries.length - 1 ? ' /' : ''}
                &nbsp;
              </button>
            ))}
          </div>
          <div>
            <Title title='Department / Functional Area' />
            <button className='font-normal text-sm text-blue-500'>
              {job.department}
            </button>
          </div>

          <div>
            <Title title='Keywords' />
            {job.tags.map((tag: string, index: number) => (
              <SecondaryButton text={tag} key={index} styles='mr-5' />
            ))}
          </div>

          <hr className='mt-6 mb-10' />

          <PrimaryButton
            text='Easy Apply'
            styles='font-normal text-base mb-4'
          />
        </div>
      </div>
    </>
  );
};

export default JobDetails;
