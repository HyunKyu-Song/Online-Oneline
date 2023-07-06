> # Online Oneline
오늘 하루를 한줄평으로 작성하는 사이트<br>
https://online-oneline.vercel.app/<br><br>
![](https://velog.velcdn.com/images/thdgusrbek/post/dd1b549c-0627-45d0-a262-f579f13cb86c/image.png)<br><br><br><br>

> # 시연 영상 (1분 30초)
https://youtu.be/PO8hg24esYo<br><br><br><br>

> # 사용기술
- React
  - `react-router-dom`
  - `redux-toolkit`<br><br><br><br>

> # Flow Chart (흐름도)
![](https://velog.velcdn.com/images/thdgusrbek/post/29063d68-ce30-4199-949a-53ac28753ab8/image.png)<br><br><br><br>

> # 폴더 구조
![](https://velog.velcdn.com/images/thdgusrbek/post/c4f0ed9d-74d6-4c9d-a35a-80e72125921e/image.png)<br><br><br><br>

> # 주요기능
- 글 생성<br><br>
![](https://velog.velcdn.com/images/thdgusrbek/post/f8ede60a-29b4-4994-a21d-a5e70fcaa848/image.gif)<br><br><br><br>
- 글 검색<br><br>
![](https://velog.velcdn.com/images/thdgusrbek/post/4f8c61c0-cb40-44d3-a027-4ba5f2bff2d0/image.gif)<br><br><br><br>
- 글 수정<br><br>
![](https://velog.velcdn.com/images/thdgusrbek/post/d3cdc4a8-7f5f-4359-a10f-0759ab139cc5/image.gif)<br><br><br><br>
- 글 삭제<br><br>
![](https://velog.velcdn.com/images/thdgusrbek/post/d70d9d5e-71e1-49c0-8bfb-dd02aa0a0fe0/image.gif)<br><br><br><br>

> # 주요로직
- `input`으로 글 제목, 글 내용, 작성자, 패스워드를 입력하고 값을 `localstorage`에 저장
```js
// form에 입력한 데이터
var data = { num: store.ListNum, title: title, content: content, writer: writer, pw: pw, date: today.toLocaleString() };
```
```js
if (localStorage.getItem('DATA') != null) {	// localstorage가 비어있지 않다면
   var load = localStorage.getItem('DATA');	// localstorage에 DATA라는 키에 값을 load에 저장
   load = JSON.parse(load);   // JSON문자열을 JS객체로 변환
   newData = [...load];
   newData.push(data);
   newData = JSON.stringify(newData);	// JS객체를 JSON문자열로 변환해서 newData에 저장
}
else {	// localstorage가 비어있다면
   newData = JSON.stringify([data]);  // JS객체를 JSON문자열로 변환해서 newData에 저장
}
localStorage.setItem('DATA', newData);	// localstorage에 DATA라는 키값에 newData라는 값을 저장
dispatch(PlusNum(store.ListNum));	// redux-toolkit을 사용해서 글 목록 번호를 1증가 시킴
alert('한줄평 작성✍ 완료!')
navigate('/list')	// 글 작성 후 글 목록 페이지로 이동
```
<br><br>
- `redux-toolkit`을 사용해서 새로고침을 해도 작성 글에 번호 유지
```js
// localstorage에서 DATA라는 키값에 해당하는 값을 가져와서 JS객체로 변환 후 data에 저장
var data = localStorage.getItem('DATA');
data = JSON.parse(data);
```
```js
var len;
if(data != null){  // localstorage에 값이 있다면
   len = data[data.length-1].num + 1;	// 새로고침 시 data[i].num + 1을 해서 다음 번호 부여함
}
else len = 0;	// localstorage에 값이 없다면
```
```js
let ListNum = createSlice({
   name: 'ListNum',
   initialState: len,
   reducers: {
      PlusNum(state, action) {	// state는 initialState값, action은 PlusNum에 파라미터를 사용할 수 있게 해줌
         if(len === 0){
            return state + 1;
         }
         else{
            return action.payload + 1;	// action.payload는 PlusNum에 파라미터 값
         }
      }
   }
})
```
<br><br><br>
> # 후기
Online Oneline을 이용해 본다면 간단한 CRUD 정도로 쉽게 만들었다고 생각할 수 있다.<br>
물론, 누군가는 쉽게 만들 수 있겠지만 본인은 localstorage로 저장기능을 구현하려고 꽤 머리 아프게 코드를 작성했다.<br><br>
또한, 완성하고 아쉽다는 생각이 들었다.<br><br>
처음부터 React만 사용해서 만들기보단 Server, DB도 사용해서 Orgin이 같은 곳에서만 저장되는 localstorage가 아닌 사이트 주소에 접속하는 어떤 장치에서도 작성한 글이 보일 수 있게 만들었다면 훨씬 효용성이 있었을 거란 생각이 들었기 때문이다.<br><br>
그래서 다음 프로젝트는 DB도 사용할 계획이다.
