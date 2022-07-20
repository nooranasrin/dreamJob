import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './features/Home/Home';
import Jobs from './features/jobs/jobs';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
