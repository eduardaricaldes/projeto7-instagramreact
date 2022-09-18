import badvibes from "../../assets/img/bad.vibes.memes.svg";
import chibirdart from "../../assets/img/chibirdart.svg";
import razoesparaacreditar from "../../assets/img/razoesparaacreditar.svg";
import adorableAnimals from "../../assets/img/adorable_animals.svg";
import smallcutecats from "../../assets/img/smallcutecats.svg";
export default function Sugestoes (){
  return(
    <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div className="sugestao">
            <div className="usuario">
              <img src={badvibes} alt="badvibes"/>
              <div className="texto">
                <div className="nome">bad.vibes.memes</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="usuario">
              <img src={chibirdart} alt="chibirdart"/>
              <div className="texto">
                <div className="nome">chibirdart</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="usuario">
              <img src={razoesparaacreditar} alt="razoesparaacreditar" />
              <div className="texto">
                <div className="nome">razoesparaacreditar</div>
                <div className="razao">Novo no Instagram</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="usuario">
              <img src={adorableAnimals} alt="adorableAnimals" />
              <div className="texto">
                <div className="nome">adorable_animals</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>

          <div className="sugestao">
            <div className="usuario">
              <img src= {smallcutecats} alt="smallcutecats"/>
              <div className="texto">
                <div className="nome">smallcutecats</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
        </div>

  );

}