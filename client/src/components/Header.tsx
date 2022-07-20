import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <div className='flex flex-row h-14 items-center justify-between m-auto w-8/12'>
        <div></div>
        <div className='flex font-bold text-base text-slate-600 justify-around w-1/6 '>
          <Link to='/'>HOME</Link>
          <Link to='jobs'>JOBS</Link>
        </div>
      </div>
      <div className='bg-blue-600 h-56 rounded-bl-normal z-0'></div>
    </div>
  );
};

export default Header;
