import moment from 'moment';
import locationImg from '../../assets/location.png';
import experienceImg from '../../assets/experience.png';

export interface JobProps {
  _id?: number;
  role: string;
  company: { name: string };
  location: { country: string; city: string };
  description: string;
  postedTime: Date;
  noOfVacancy?: number;
  employmentType?: string;
  tags?: [string];
  experience: { start: number; end: number };
}

const Job = ({
  role,
  company,
  location,
  description,
  postedTime,
  experience,
  noOfVacancy,
  employmentType,
  tags,
}: JobProps): JSX.Element => {
  return (
    <div className='bg-white w-9/12 m-auto p-4 rounded-lg shadow-lg mt-4'>
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
