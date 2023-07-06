/*eslint-disable*/
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PlusNum } from "../store";

export default function Write() {

   let [title, setTitle] = useState('');
   let [content, setContent] = useState('');
   let [writer, setWriter] = useState('');
   let [pw, setPw] = useState('');
   let navigate = useNavigate();
   let today = new Date();
   let store = useSelector((state) => { return state });
   let dispatch = useDispatch();
   let [warning, setWarning] = useState('');
   let [timer, setTimer] = useState(0);

   useEffect(() => {
      if (timer == 0) {
         setWarning('');
      }
      else {
         let free = setTimeout(() => {
            setTimer(timer - 1);
         }, 1000);
         return () => {
            clearTimeout(free);
         }
      }
   }, [timer])

   return (
      <div className="write-container">
         <form>
            <fieldset>
               <div className={`warning-alert ${warning}`}>
                  <p>빈 곳 없이 입력해 주세요</p>
               </div>
               <legend>한줄평 작성 ✍</legend>
               <div className="write-title">
                  글제목<br /> <input onInput={(e) => {
                     // console.log(e.target.value)
                     setTitle(e.target.value)
                  }} type="text" name="title" placeholder="글 제목을 작성해주세요"></input>
               </div>
               <div className="write-content">
                  한줄평<br /> <input onInput={(e) => {
                     // console.log(e.target.value)
                     setContent(e.target.value)
                  }} name="content" placeholder="오늘 하루를 한줄평으로 작성"></input>
               </div>
               <div className="write-writer">
                  🙍‍♀️작성자: <input onInput={(e) => {
                     setWriter(e.target.value)
                  }} name="writer"></input>
               </div>
               <div className="write-pw">
                  🔑패스워드: <input onInput={(e) => {
                     setPw(e.target.value)
                  }} name="pw"></input>
               </div>
               <button onClick={() => {
                  console.log(store.ListNum, title, content, writer)

                  if (title == '' || content == '' || writer == '' || pw == '') {
                     setWarning('show');
                     setTimer(2)
                  }
                  else {
                     // form에 입력한 데이터
                     var data = { num: store.ListNum, title: title, content: content, writer: writer, pw: pw, date: today.toLocaleString() };
                     var newData

                     if (localStorage.getItem('DATA') != null) {
                        var load = localStorage.getItem('DATA');
                        load = JSON.parse(load);   // json을 사용할 수 있게 변환
                        newData = [...load];
                        newData.push(data);
                        newData = JSON.stringify(newData);
                     }
                     else {
                        newData = JSON.stringify([data]);  // data를 json형태로 변경해서 newData에 저장
                     }
                     localStorage.setItem('DATA', newData);
                     dispatch(PlusNum(store.ListNum));
                     alert('한줄평 작성✍ 완료!')
                     navigate('/list')
                  }

               }} className="write-save" type="button">저장</button>
            </fieldset>
         </form>
      </div>
   )
}