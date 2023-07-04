import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
   return (
      <div className="about-container">
         <div className="about-title">Online Oneline <FontAwesomeIcon icon={faPenToSquare} /></div>
         <div className="about-text">
            <p>
               사이트 이름처럼 온라인에서 한줄평을 작성하는 곳<br />
               물론 여러 줄 작성하는 것도 가능하지만 사이트 취지에 따른다면 오늘 하루를 한줄평으로 작성하며 기록해 보는 것이 어떨까?<br /><br />

               한 줄만 적기 때문에 시간 투자를 오래 할 필요가 없고 시간이 지나 읽어볼 때도 한눈에 들어오기 때문에 가독성도 좋다.<br />
               특별히 회원가입할 필요도 없이 비밀번호만 입력하면 누구나 작성 가능
            </p>
            {/* <p>Online Oneline 웹사이트 소개</p>
            <p>사이트 이름처럼 온라인에서 한줄평을 작성하는 곳</p>
            <p>물론 여러 줄 작성하는 것도 가능하지만 사이트 취지에 따른다면
               오늘 하루를 한줄평으로 작성하며 기록해보는 것이 어떨까?</p>
            <p>한줄만 적기 때문에 시간 투자를 오래할 필요가 없고 시간이 지나 읽어볼때도
               한눈에 들어오기 때문에 가독성도 좋다.</p>
            <p>특별히 회원가입할 필요도 없이 비밀번호 정도만 입력하면 누구나 작성 가능</p> */}
         </div>
      </div>
   )
}