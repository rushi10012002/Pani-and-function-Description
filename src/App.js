import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './Page/Home';
import TableInfo from './Components/TableInfo';
function App() {
  return (
  <>
    <Router>
     <Routes>
     <Route  path='/' element={<Home/>}></Route>
     <Route  path='/tableInfo' element={<TableInfo/>}></Route>
     </Routes>
    </Router>
    
  </>
  );
}

export default App;
