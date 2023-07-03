/*eslint-disable*/

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function List() {

   let [empty, setEmpty] = useState('list-container-empty');
   let [search, setSearch] = useState('');
   let dispatch = useDispatch();
   let navigate = useNavigate();
   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);

   useEffect(()=>{
      if(empty != 'list-container-empty'){
         setEmpty('list-container');
      }
   }, [empty])
   console.log(empty);

   return (
      // <div className="list-container">
      <div className={`${empty}`}>
         <div className="list-search">
            <input onInput={(e)=>{
               setSearch(e.target.value);
            }} type="text" placeholder="한줄평 검색"></input> <button onClick={()=>{
               console.log(search);
            }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
         </div>
         {
            data != null ?
               data.map(function (item, i) {
                  return (
                     <div onClick={() => {
                        navigate(`/list/detail/${item.num}`);
                     }} className="list-item" key={i}>
                        <div>No.{item.num}</div>
                        <div className="list-title">제목: {item.title} </div>
                        <div className="list-content">{item.content}</div>
                        <div className="list-writer">작성자: {item.writer}</div>
                        <div className="list-date">{item.date}</div>
                     </div>
                  )
               }) :
               <div className="list-item" style={{ textAlign: 'center' }}>
                  <h2>아직 작성된 글이 없습니다.</h2>
               </div>
         }
      </div>
   )
}