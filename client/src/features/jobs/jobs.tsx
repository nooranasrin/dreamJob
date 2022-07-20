import { useQuery } from '@apollo/client';
import { JOBS } from '../../queries/queries';
import Job, { JobProps } from './job';

const Jobs: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className='bg-blue-500 h-44 rounded-bl-3xl z-0'></div>
      <div className='w-6/12 m-auto'>
        <div className='bg-white w-9/12 m-auto -mt-8 p-4 rounded-t-xl shadow-lg mt-4'>
          <div className='border border-gray-300 w-40 h-9 rounded-2xl p-1 pr-2 text-right text-s text-slate-500'>
            Easy Apply(1002)
          </div>
        </div>
        {data.jobs.map((job: JobProps) => (
          <Job
            key={job._id}
            role={job.role}
            description={job.description}
            company={job.company}
            employmentType={job.employmentType}
            location={job.location}
            noOfVacancy={job.noOfVacancy}
            postedTime={job.postedTime}
            tags={job.tags}
            experience={job.experience}
          />
        ))}
      </div>
    </>
  );
};

export default Jobs;
