/*eslint-disable*/
import './style/Navbar.css';
import './style/Write.css';
import './style/List.css';
import Navbar from './component/Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Write from './component/Write';
import List from './component/List';
import MyPage from './component/MyPage';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/write' element={<Write/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/mypage' element={<MyPage/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
