/*eslint-disable*/
import { Routes, Route } from 'react-router-dom';

import './style/Navbar.css';
import './style/Home.css';
import './style/Write.css';
import './style/List.css';
import './style/Detail.css';
import './style/About.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write';
import List from './components/List';
import About from './components/About';
import Deatail from './components/Detail';
import Update from './components/Update';

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