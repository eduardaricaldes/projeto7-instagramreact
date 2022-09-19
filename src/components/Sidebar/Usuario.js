import { useState } from "react";
import catanacomics from "../../assets/img/catanacomics.svg"
export default function Usuario (){
  const [nomeUsuario, setNomeUsuario] = useState("catacomics")

  function editarNome() {
    const promptEditarNome=prompt("deseja alterar o seu usuario?");
    setNomeUsuario(promptEditarNome);
  }

  
  return(
     <div className="usuario">
          <img src={catanacomics} alt="catanacomics"/>
          <div className="texto">
            <strong>{nomeUsuario}</strong>
            <span>
              Catana
              <ion-icon name="pencil" onClick={editarNome}></ion-icon>
            </span>
          </div>
        </div>
  );
}