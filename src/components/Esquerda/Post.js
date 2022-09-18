import meowed from "../../assets/img/meowed.svg";
import catcelphone from "../../assets/img/gato-telefone.svg";
import respondeai from "../../assets/img/respondeai.svg";
import barked from "../../assets/img/barked.svg";
import dog from "../../assets/img/dog.svg";
import adorableAnimals from "../../assets/img/adorable_animals.svg";

export default function Post (){
  return(
    <div className="posts">
          <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src= {meowed} alt="meowed"/>
                meowed
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
            <img src={catcelphone} alt="catcelphone"/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={respondeai} alt="respondeai"/>
                <div className="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="topo">
              <div className="usuario">
              <img src={barked} alt="barked"/>
                barked
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={dog} alt="dog"/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
              <img src={adorableAnimals} alt="adorableAnimals" />
                <div className="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}