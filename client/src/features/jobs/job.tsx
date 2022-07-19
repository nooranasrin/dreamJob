export interface JobProps {
  id?: number;
  role: string;
  company: {};
  location: {};
  description: string;
  postedTime: Date;
  noOfVacancy?: number;
  employmentType?: string;
  tags?: [string];
}

const Job = ({
  role,
  company,
  location,
  description,
  postedTime,
  noOfVacancy,
  employmentType,
  tags,
}: JobProps): JSX.Element => {
  return <h1>{role}</h1>;
};

export default Job;
