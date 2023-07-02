/*eslint-disable*/
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { MinusNum } from "../store";

export default function Deatail() {

   let { id } = useParams();
   let store = useSelector((state) => { return state });
   let dispatch = useDispatch();
   let navigate = useNavigate();
   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);
   let [n, setN] = useState(-1);
   let [a, setA] = useState(-1);

   // useEffect(() => {
   //    data.map(function (item) {
   //       if (item.writer == id) {
   //          setN(item.num);
   //       }
   //    })
   // }, []);
   // console.log(n, id);

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
                  <button>🔨수정</button> <button onClick={() => {
                     data.map(function (item, i) {
                        if (item.num == id) {
                           data.splice(i, 1);
                           i--;
                        }
                     })
                     // data.splice(n, 1);
                     data = JSON.stringify(data);
                     localStorage.setItem('DATA', data);
                     // dispatch(MinusNum());
                     navigate('/list');
                  }}>💣삭제</button>
                  {/* <div className="delete-container" onClick={() => {
                  data.splice(item.num, 1);
                  data = JSON.stringify(data);
                  localStorage.setItem('DATA', data);
                  navigate('/list');
               }}><FontAwesomeIcon className="deleteBtn" icon={faCircleXmark} title="삭제" /></div> */}
               </div>
         }
      </div>
   )
}