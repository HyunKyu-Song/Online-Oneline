export default function List() {

   var data = localStorage.getItem('DATA');
   data = JSON.parse(data);

   return (
      <div className="list-container">
         {
            data != null ?
               data.map(function (item, i) {
                  return (
                     <div className="list-item" key={i}>
                        <div className="list-title">제목: {item.title}</div>
                        <div className="list-content">{item.content}</div>
                        <div className="list-writer">작성자: {item.writer}</div>
                     </div>
                  )
               }) :
               <div className="list-item" style={{textAlign:'center'}}>
                  <h2>아직 작성된 글이 없습니다.</h2>
               </div>
         }
      </div>
   )
}