import { Link } from 'react-router-dom';
import logo from '../assets/dj.png';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='bg-white flex h-14 justify-between'>
      <div className='w-48'>
        <img src={logo} alt='' className='w-full h-14' />
      </div>
      <div className='flex font-bold mr-60 items-center text-base text-slate-600 justify-around w-44'>
        <Link to='/'>HOME</Link>
        <Link to='jobs'>JOBS</Link>
      </div>
    </div>
  );
};

export default Header;
