import './Main.css';
import { Link, Route, Routes } from 'react-router-dom';
import Vera from './components/Vera';
import Milla from './components/Milla'
import Mila from './components/Mila';
import Leo from './components/Leo';
import Silvestr from './components/Silvestr';

function App() {
  return (
    <div className="App">
      <h1>5 відомих голлівудських акторів з українським корінням</h1>
      <Link className={"nav"} to={'Vera'}>Vera Farmiga</Link>
      <Link className={"nav"} to={'Milla'}>Milla Jovovich</Link>
      <Link className={"nav"} to={'Mila'}>Mila Kunis</Link>
      <Link className={"nav"} to={'Leo'}>Leonardo Di Caprio</Link>
      <Link className={"nav"} to={'Silvestr'}>Silvestr Stallone</Link>
        <Routes>
          <Route path='/Vera' element={<Vera/>}/>
          <Route path='/Milla' element={<Milla/>}/>
          <Route path='/Mila' element={<Mila/>}/>
          <Route path='/Leo' element={<Leo/>}/>
          <Route path='/Silvestr' element={<Silvestr/>}/>
        </Routes>
    </div>
  );
}

export default App;
