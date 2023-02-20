import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Dasboard from './components/Dasboard';
import Admin from './components/Admin';
import Forgot_password from './components/Forgot_password';
import Register from './components/Register';
import Index3 from './components/Index3';
import Index from './components/Index';
import Index2 from './components/Index2';
import Widgets from './components/Widgets';
import General from './components/General';
import Data_table from './components/Data_table';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/Admin" element={(window.localStorage.getItem('id')===null)?<Admin/>:<Dasboard/>}/>
        <Route path="/Dasboard" element={window.localStorage.getItem('id')!==null ?<Dasboard/>:<Admin/> } />
        {/* <Route path="Admin/Forgot_password" element={ <Forgot_password/> } /> */}
        {/* <Route path="Admin/Register" element={ <Register/> } /> */}
        <Route path="/Index" element={ <Index/> } />
        <Route path="/Index2" element={ <Index2/> } />
        <Route path="/Index3" element={ <Index3/> } />
        <Route path="/Widgets" element={ <Widgets/> } />
        <Route path="/General" element={ <General/> } />
        <Route path="/Data_table" element={ <Data_table/> } />
        <Route path="/Logout" element={ <Logout/> } />
      </Routes>
      
    </div>
  );
}

export default App;
