/*eslint-disable*/

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

export default function Deatail() {

   let { id } = useParams();
   let store = useSelector((state) => { return state });
   let dispatch = useDispatch();
   let navigate = useNavigate();
   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);
   let [n, setN] = useState(-1);
   let [a, setA] = useState(-1);

   useEffect(() => {
      setN(id);

      data.map(function (item, i) {
         if (item.num == id) {
            setA(i);
         }
      })

   }, [n]);

   return (
      <div className="detail-container">
         {
            n == -1 ? <h2>Loading...</h2> :
               <div className="detail-item">
                  <div className="detail-title">제목: {data[a].title} </div>
                  <div className="detail-content">{data[a].content}</div>
                  <div className="detail-writer">작성자: {data[a].writer}</div>
                  <div className="detail-date">{data[a].date}</div>
                  <button onClick={()=>{
                     navigate(`/update/${a}`);
                  }}>🔨수정</button> <button onClick={() => {
                     data.map(function (item, i) {
                        if (item.num == id) {
                           data.splice(i, 1);
                           i--;
                        }
                     })
                     data = JSON.stringify(data);
                     localStorage.setItem('DATA', data);
                     navigate('/list');
                  }}>💣삭제</button>
               </div>
         }
      </div>
   )
}