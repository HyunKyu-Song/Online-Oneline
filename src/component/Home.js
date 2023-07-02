import { useNavigate } from "react-router-dom"

export default function Home() {

   let navigate = useNavigate();

   return (
      <div className="home-container">
         <div className="home-box1">
            오늘 하루는 어땠나요?
            <div>
               <button onClick={()=>{alert('좋은 하루셨군요! 축하드려요🔥🔥')}}>Good</button> <button onClick={()=>{alert('그저그런 하루셨군요! 내일은 좋은 하루가 되길 빌어요😊')}}>So So</button> <button onClick={()=>{alert('내일은 좋은 하루가 되길 빌어요.🍀')}}>Bad</button>
            </div>
         </div>
         <div className="home-box2">
            <div>한줄평으로 오늘을 기록해보세요</div>
            <button onClick={() => { navigate('/write') }}>✍ 글 작성하러 가기</button>
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