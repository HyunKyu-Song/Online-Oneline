/*eslint-disable*/

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Update() {

   let { id } = useParams();
   let navigate = useNavigate();
   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);
   let [title, setTitle] = useState(data[id].title);
   let [content, setContent] = useState(data[id].content);

   return (
      <div className="write-container">
         <form>
            <fieldset>
               <legend>한줄평 수정 ✍</legend>
               <div className="write-title">
                  제목<br /> <input onInput={(e) => {
                     // console.log(e.target.value)
                     setTitle(e.target.value)
                  }} type="text" name="title" defaultValue={data[id].title}></input>
               </div>
               <div className="write-content">
                  한줄평<br /> <input onInput={(e) => {
                     // console.log(e.target.value)
                     setContent(e.target.value)
                  }} name="content" defaultValue={data[id].content}></input>
               </div>
               <div className="detail-writer">작성자: {data[id].writer}</div>
               <div className="detail-date">{data[id].date}</div>
               <button className="write-save" onClick={() => {
                  data[id] = { num: data[id].num, title: title, content: content, writer: data[id].writer, date: data[id].date }
                  console.log(data)
                  data = JSON.stringify(data);
                  localStorage.setItem('DATA', data);
                  navigate('/list');
               }}>Update</button>
            </fieldset>
         </form>
      </div>
   )
}