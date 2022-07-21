import { useQuery } from '@apollo/client';
import { JOBS } from '../../queries/queries';
import Job, { JobType } from './job';
import logo from '../../assets/logo.png';

const Jobs: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className='bg-blue-500 h-44 rounded-bl-3xl z-0'></div>
      <div className='w-6/12 m-auto'>
        <div className='bg-white w-9/12 m-auto -mt-8 p-4 rounded-t-xl shadow-lg mt-4'>
          <div className='border flex border-gray-300 w-44 h-9 rounded-2xl p-1 pr-2 text-center text-s text-slate-500'>
            <img src={logo} alt='' className='w-6 h-6 mr-2' />
            Easy Apply(1002)
          </div>
        </div>
        {data.jobs.map((job: JobType) => (
          <Job key={job._id} job={job as JobType} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
