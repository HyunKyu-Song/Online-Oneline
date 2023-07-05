/*eslint-disable*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Home() {

   let navigate = useNavigate();
   let [alert, setAlert] = useState('');
   let [timer, setTimer] = useState(0);
   let [ment, setMent] = useState('');

   useEffect(() => {
      if (timer == 0) {
         setAlert('');
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
      <div className="home-container">
         <div className={`ment-alert ${alert}`}>
            <p>{ment}</p>
         </div>
         <div className="home-box1">
            오늘 하루는 어땠나요?
            <div>
               <button onClick={() => {
                  setAlert('show');
                  setTimer(3);
                  setMent('좋은 하루셨군요! 축하드려요🔥🔥');
               }}>Good</button>
               <button onClick={() => {
                  setAlert('show');
                  setTimer(3);
                  setMent('내일은 좋은 하루가 되길 빌어요😊');
               }}>So So</button>
               <button onClick={() => {
                  setAlert('show');
                  setTimer(3);
                  setMent('내일은 좋은 하루가 되길 빌어요.🍀');
               }}>Bad</button>
            </div>
         </div>
         <div className="home-box2">
            <div><strong>한줄평</strong>으로 오늘을 기록해보세요</div>
            <button onClick={() => { navigate('/write') }}>✍ <strong>글 작성</strong>하러 가기</button>
         </div>
         <div className="home-box3">
            <h2>한줄평인 이유?</h2>
            <div className="home-box3-item">
               <div>
                  <p className="item-title">Comfortable</p>
                  <p className="item-content">한눈에 보기 편안</p>
               </div>
               <div>
                  <p className="item-title">Fast</p>
                  <p className="item-content">빠르게 작성가능</p>
               </div>
               <div>
                  <p className="item-title">Continuous</p>
                  <p className="item-content">부담감이 적어 꾸준하게 작성가능</p>
               </div>
            </div>
         </div>
      </div>
   )
}