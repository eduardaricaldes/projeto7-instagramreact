import { useState } from "react";
export default  function FundoMobile (){
  const [bookmark, setBookmark] = useState("bookmark-outline")
  function buttonPreenchido(){
    setBookmark("bookmark")
  }
  const [heart, setHeart] = useState("heart-outline")
  function buttonHeart (){
    setHeart("heart")
  }
  return(
    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name={heart} onClick={buttonHeart}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name={bookmark} onClick={buttonPreenchido} ></ion-icon>
        </div>
      </div>
    </div>
    
  );
}