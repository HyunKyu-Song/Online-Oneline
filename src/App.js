/*eslint-disable*/
import { Routes, Route } from 'react-router-dom';

import './style/Navbar.css';
import './style/Home.css';
import './style/Write.css';
import './style/List.css';
import './style/Detail.css';
import './style/About.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Write from './component/Write';
import List from './component/List';
import About from './component/About';
import Deatail from './component/Detail';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/write' element={<Write />} />
        <Route path='/list' element={<List />} />
        <Route path='/list/detail/:id' element={<Deatail />} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/about' element={<About />} />
      </Routes>

      <footer>
        <div class="copyRight">Copyright © Song. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default App;