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
   let [show, setShow] = useState('');
   let [pw, setPw] = useState('');
   let [correct, setCorrect] = useState(false);

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

                  <div>
                     <div className={`write-pw pw-check ${show}`}>
                        🔑패스워드: <input onInput={(e) => {
                           // console.log(e.target.value)
                           setPw(e.target.value)
                        }} name="pw"></input>
                        <button onClick={() => {
                           if (pw == data[a].pw) {
                              setCorrect(true);
                              alert('인증되었습니다. 수정 또는 삭제 버튼을 눌러주세요.')
                           }
                           else
                              alert('패스워드가 틀렸습니다.')
                           console.log(correct, pw, data[a].pw)
                        }}>확인</button>
                     </div>
                  </div>

                  <button onClick={() => {
                     setShow('show-pw');
                     if (correct == true) {
                        navigate(`/update/${a}`);
                     }
                  }}>🔨수정</button> <button onClick={() => {
                     setShow('show-pw');
                     if (correct == true) {
                        data.map(function (item, i) {
                           if (item.num == id) {
                              data.splice(i, 1);
                              i--;
                           }
                        })
                        data = JSON.stringify(data);
                        localStorage.setItem('DATA', data);
                        navigate('/list');
                     }
                  }}>💣삭제</button>
               </div>
         }
      </div>
   )
}