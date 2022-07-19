import { useQuery } from '@apollo/client';
import { JOBS } from '../../queries/queries';
import Job, { JobProps } from './job';

const Jobs: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.jobs.map((job: JobProps) => (
    <Job
      key={job.id}
      role={job.role}
      description={job.description}
      company={job.company}
      employmentType={job.employmentType}
      location={job.location}
      noOfVacancy={job.noOfVacancy}
      postedTime={job.postedTime}
      tags={job.tags}
    />
  ));
};

export default Jobs;
