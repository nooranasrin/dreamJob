import { useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  PrimaryButton,
  SecondaryButton,
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

  const {
    role,
    company,
    postedTime,
    location,
    experience,
    education,
    nationality,
    gender,
    noOfVacancy,
    description,
    requirements,
    tags,
  } = data.job;

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
          <PrimaryButton text='Easy Apply' />
        </div>
        <div className='bg-white m-auto mt-8 p-4 rounded-lg shadow-lg text-xs font-bold'>
          <div className='flex justify-between flex-wrap text-slate-500'>
            <div className='w-60 mb-5'>
              <div>Experience</div>
              <div className='font-normal text-sm'>
                {experience.start} - {experience.end} Years
              </div>
            </div>
            <div className='w-60 mb-5'>
              <div>Job Location</div>
              <div className='font-normal text-sm'>
                {location.city} - {location.country}
              </div>
            </div>
            <div className='w-60 mb-5'>
              <div>Education</div>
              <div className='font-normal text-sm'>{education}</div>
            </div>
            <div className='w-60 mb-5'>
              <div>Nationality</div>
              <div className='font-normal text-sm'>{nationality}</div>
            </div>
            <div className='w-60 mb-5'>
              <div>Gender</div>
              <div className='font-normal text-sm'>{gender}</div>
            </div>
            <div className='w-60 mb-5'>
              <div>Vacancy</div>
              <div className='font-normal text-sm'>{noOfVacancy}</div>
            </div>
          </div>

          <div>
            <div className='text-base text-slate-700 mb-2 mt-8'>
              Job Description
            </div>
            <div className='text-sm font-normal text-slate-500 pr-16'>
              {description}
            </div>
          </div>

          <div>
            <div className='text-base text-slate-700 mb-2 mt-8'>
              Requirements
            </div>
            <ListItems items={requirements} />
          </div>
          <div>
            <div className='text-base text-slate-700 mb-2 mt-8'>Keywords</div>
            {tags.map((tag: string, index: number) => (
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
