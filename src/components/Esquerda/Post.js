import { useState } from "react";
export default function Post(props){
  const [bookmark, setBookmark] = useState("bookmark-outline")
  const [heart, setHeart] = useState("heart-outline")
  const [color, setColor] = useState("dark")
  const [curtidas, setCurtidas] = useState(0)
  const [jaFoiCurtida, setJafoi] = useState(false);
  function buttonPreenchido(){
    setBookmark("bookmark")
  }

  
  function buttonHeart (){
    if(!jaFoiCurtida){
      setHeart("heart")
      setColor("danger")
      const curtidaCount = curtidas + 1;
      setCurtidas(curtidaCount);
      setJafoi(true);
    }else{
      setHeart("heart-outline")
      setColor("dark")
      const curtidaCount = curtidas - 1;
      setCurtidas(curtidaCount);
      setJafoi(false);
    }
  }
  
  return(
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src= {props.imgUsuario} alt={props.altUsuario}/>
          {props.usuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div className="conteudo">
        <img src={props.imgConteudo} alt={props.altConteudo}/>
        </div>
        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={heart} color={color} onClick={buttonHeart}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={bookmark} onClick={buttonPreenchido}></ion-icon>
            </div>
          </div>
          <div className="curtidas">
            <img src={props.imgCurtidas} alt={props.altCurtidas}/>
            <div className="texto">
            Curtido por <strong>{props.usuarioCurtida}</strong> e <strong>outras {curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>


  );
}