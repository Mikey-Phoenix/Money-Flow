import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Bills from './pages/bills';
import Balances from './pages/balances';
import Goals from './pages/goals';
import Transactions from './pages/transactions';
import Settings from './pages/settings';
import SignUp from './pages/signup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Dashboard />}/>
        <Route path={'/balances'} element={<Balances />}/>
        <Route path={'/bills'} element={<Bills />}/>
        <Route path={'/goals'} element={<Goals />}/>
        <Route path={'/sign-up'} element={<SignUp />}/>
        <Route path={'/settings'} element={<Settings />}/>
        <Route path={'/transactions'} element={<Transactions />}/>

        <Route path='*' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
