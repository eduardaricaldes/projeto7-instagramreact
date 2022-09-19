import { useState } from "react";
import catanacomics from "../../assets/img/catanacomics.svg"
export default function Usuario (){
  const [nomeUsuario, setNomeUsuario] = useState("catacomics")
  const [caminhoImagem, setCaminhoImagem]=useState(catanacomics)

  function editarNome() {
    const promptEditarNome=prompt("deseja alterar o seu usuario?");
    setNomeUsuario(promptEditarNome);
  }

 function editarImagem (){
  const promptEditarImagem=prompt("novo link da imagem url")
  setCaminhoImagem(promptEditarImagem);

 }
  
  return(
     <div className="usuario">
          <img src={caminhoImagem} alt="catanacomics" onClick={editarImagem}/>
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