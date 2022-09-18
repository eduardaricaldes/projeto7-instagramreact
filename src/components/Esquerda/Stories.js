import ninegag from "../../assets/img/9gag.svg";
import meowed from "../../assets/img/meowed.svg";
import barked from "../../assets/img/barked.svg";
import nathanwpylestrangeplanet from "../../assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../../assets/img/wawawicomics.svg";
import respondeai from "../../assets/img/respondeai.svg";
import filomoderna from "../../assets/img/filomoderna.svg";
import memeriagourmet from "../../assets/img/memeriagourmet.svg";

export default function Stories (){
  return (
     <div className="stories">
          <div className="story">
            <div className="imagem">
              <img src= {ninegag} alt="9gag"/>
            </div>
            <div className="usuario">
              9gag
            </div>
          </div>

          <div className="story">
            <div className="imagem">
              <img src={meowed} alt="meowed"/>
            </div>
            <div className="usuario">
              meowed
            </div>
          </div>

          <div className="story">
            <div className="imagem">
              <img src= {barked} alt="barked"/>
            </div>
            <div className="usuario">
              barked
            </div>
          </div>

          <div className="story">
            <div className="imagem">
            <img src= {nathanwpylestrangeplanet} alt="nathanwpylestrangeplanet"/>
            </div>
            <div className="usuario">
              nathanwpylestrangeplanet
            </div>
          </div>

          <div className="story">
            <div className="imagem">
              <img src= {wawawicomics} alt="wawawicomics"/>
            </div>
            <div className="usuario">
              wawawicomics
            </div>
          </div>

          <div className="story">
            <div className="imagem">
              <img src={respondeai} alt="respondeai"/>
            </div>
            <div className="usuario">
              respondeai
            </div>
          </div>

          <div className="story">
            <div className="imagem">
              <img src={filomoderna} alt="filomoderna"/>
            </div>
            <div className="usuario">
              filomoderna
            </div>
          </div>

          <div className="story">
            <div className="imagem">
          <img src={memeriagourmet} alt="memeriagourmet"/>
            </div>
            <div className="usuario">
              memeriagourmet
            </div>
          </div>

          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
  );
}