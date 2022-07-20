import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './features/Home/Home';
import Jobs from './features/jobs/jobs';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className='bg-white'>
        <div className='flex flex-row h-14 items-center justify-between m-auto w-8/12'>
          <div></div>
          <div className='flex font-bold text-base text-slate-600 justify-around w-1/6 '>
            <Link to='/'>HOME</Link>
            <Link to='jobs'>JOBS</Link>
          </div>
        </div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
