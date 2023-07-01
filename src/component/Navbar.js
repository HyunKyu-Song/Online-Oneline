/*eslint-disable*/

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Navbar() {
   let navigate = useNavigate();
   
   return (
      <nav className='navbar'>
         <ul>
            <li onClick={()=>{navigate('/')}} className='home'>Online Oneline <FontAwesomeIcon icon={faPenToSquare} /></li>
         </ul>
         <ul className="menu">
            <li onClick={()=>{navigate('/login')}}>로그인</li>
            <li onClick={()=>{navigate('/write')}}>글 작성</li>
            <li onClick={()=>{navigate('/list')}}>글 목록</li>
            <li onClick={()=>{navigate('/mypage')}}>My Page</li>
            <li onClick={()=>{navigate('/about')}}>About</li>
         </ul>
      </nav>
   )
}