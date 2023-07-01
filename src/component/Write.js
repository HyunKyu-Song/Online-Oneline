import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Write() {

   var [title, setTitle] = useState('');
   var [content, setContent] = useState('');
   var [writer, setWriter] = useState('');
   var navigate = useNavigate();

   return (
      <div>
         <form>
            <fieldset>
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
                     // console.log(e.target.value)
                     setWriter(e.target.value)
                  }} name="writer"></input>
               </div>
               <button onClick={() => {
                  console.log(title, content, writer)

                  // form에 입력한 데이터
                  var data = { title: title, content: content, writer: writer };
                  var newData

                  if (localStorage.getItem('DATA') != null) {
                     var load = localStorage.getItem('DATA');
                     load = JSON.parse(load);   // json을 사용할 수 있게 변환
                     newData = [...load];
                     newData.push(data);
                     newData = JSON.stringify(newData);
                  }
                  else{
                     newData = JSON.stringify([data]);  // data를 json형태로 변경해서 newData에 저장
                  }
                  localStorage.setItem('DATA', newData);
                  alert('한줄평 작성✍ 완료!')
                  navigate('/list')
                  
               }} className="write-save" type="button">저장</button>
            </fieldset>
         </form>
      </div>
   )
}