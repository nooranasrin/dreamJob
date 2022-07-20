import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import locationImg from '../../assets/location.png';
import experienceImg from '../../assets/experience.png';

export interface JobType {
  _id?: number;
  role: string;
  company: { name: string };
  location: { country: string; city: string };
  description: string;
  postedTime: Date;
  experience: { start: number; end: number };
}

export interface JobProps {
  job: JobType;
}

const Job = ({ job }: JobProps): JSX.Element => {
  const { _id, role, company, location, description, postedTime, experience } =
    job;

  const navigate = useNavigate();

  return (
    <div
      className='bg-white rounded-xl w-9/12 m-auto p-4 shadow-lg mt-4'
      onClick={() => navigate(`/jobs/${_id}`)}>
      <div className='font-semibold text-base text-slate-700'>{role}</div>
      <div className='font-semibold text-sm text-slate-500'>{company.name}</div>
      <div className='flex mt-3 mb-2 text-xs text-slate-500'>
        <div className='flex'>
          <img src={experienceImg} alt='' className='w-4 h-4' />
          <div className='ml-2'>
            {experience.start} - {experience.end} Years
          </div>
        </div>
        <div className='flex ml-24'>
          <img src={locationImg} alt='' className='w-5 h-4' />
          <div className='ml-1'>{location.country}</div>
        </div>
      </div>
      <p className='text-xs text-slate-500 mb-3'>
        {description.substring(1, 225)}
        {description.length > 225 ? '...' : ''}
      </p>
      <div className='text-xs text-slate-500'>
        {moment(postedTime.toString(), 'YYYYMMDD').fromNow()}
      </div>
    </div>
  );
};

export default Job;
