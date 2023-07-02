/*eslint-disable*/
import { faCircleXmark, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InsertData } from "../store";
import { useEffect } from "react";

export default function List() {

   let a = useSelector((state) => { return state });
   let dispatch = useDispatch();
   let navigate = useNavigate();
   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);

   // useEffect(()=>{
   //    dispatch(InsertData(data));
   // }, [data])

   // dispatch(InsertData(data));

   return (
      <div className="list-container">
         {/* <button onClick={() => {
            dispatch(InsertData(data));
            console.log(a.LocalStorageData);
            console.log(data);
         }}>btn</button> */}
         {
            data != null ?
               data.map(function (item, i) {
                  return (
                     <div onClick={() => {
                        navigate(`/list/detail/${item.writer}`);
                     }} className="list-item" key={i}>
                        {/* <div className="list-delteBtn"><FontAwesomeIcon icon={faCircleXmark} title="삭제" /></div> */}
                        <div>No.{item.num+1}</div>
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