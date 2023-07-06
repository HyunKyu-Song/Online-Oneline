import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
   return (
      <div className="about-container">
         <div className="about-title">Online Oneline <FontAwesomeIcon icon={faPenToSquare} /></div>
         <div className="about-text">
            <p>
               사이트 이름처럼 온라인에서 한줄평을 작성하는 곳<br />
               물론 여러 줄 작성하는 것도 가능하지만 사이트 취지에 따른다면 오늘 하루를 한줄평으로 작성하며 기록해 보는 것이 어떨까요?<br /><br />

               한 줄만 적기 때문에 시간 투자를 오래 할 필요 없고, 시간이 지나 읽어볼 때 한눈에 들어오기 때문에 가독성도 높습니다.<br />
               또한, 회원가입할 필요 없이 누구나 작성 가능합니다.
            </p>
         </div>
      </div>
   )
}