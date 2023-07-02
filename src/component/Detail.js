/*eslint-disable*/
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Deatail() {

   let { id } = useParams();
   // let a = useSelector((state) => { return state });
   // let dispatch = useDispatch();
   let navigate = useNavigate();
   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);
   let [n, setN] = useState(-1);

   useEffect(() => {
      data.map(function (item) {
         if (item.writer == id) {
            setN(item.num);
         }
      })
   }, []);
   console.log(n, id);

   return (
      <div className="detail-container">
         {
            n == -1 ? <h2>Loading...</h2> : <div className="detail-item">
               <div className="detail-title">제목: {data[n].title} </div>
               <div className="detail-content">{data[n].content}</div>
               <div className="detail-writer">작성자: {data[n].writer}</div>
               <div className="detail-date">{data[n].date}</div>
               <button>🔨수정</button> <button>💣삭제</button>
               {/* {
                  data.map(function (item) {
                     if (id == item.title) {
                        console.log(item.title)
                        console.log(item.content)
                        console.log(item.writer)
                        return (
                           <div className="detail-container">
                              <div className="detail-title">제목: {item.title} </div>
                              <div className="detail-content">{item.content}</div>
                              <div className="detail-writer">작성자: {item.writer}</div>
                              <div className="detail-date">{item.date}</div>
                              <button>🔨수정</button> <button>💣삭제</button>
                              <div className="delete-container" onClick={() => {
                                 data.splice(item.num, 1);
                                 data = JSON.stringify(data);
                                 localStorage.setItem('DATA', data);
                                 navigate('/list');
                              }}><FontAwesomeIcon className="deleteBtn" icon={faCircleXmark} title="삭제" /></div>
                           </div>
                        )
                     }
                  })
               } */}
            </div>
         }
      </div>
   )
}