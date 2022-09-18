import meowed from "../../assets/img/meowed.svg";
import catcelphone from "../../assets/img/gato-telefone.svg";
import respondeai from "../../assets/img/respondeai.svg";
import barked from "../../assets/img/barked.svg";
import dog from "../../assets/img/dog.svg";
import adorableAnimals from "../../assets/img/adorable_animals.svg";
import Post from "./Post";

export default function Posts (){
  const posts = [
    {
      id:1,
      imgUsuario: meowed,
      altUsuario: "meowed",
      usuario: "meowed",

      imgConteudo: catcelphone,
      altConteudo: "catcelphone",

      imgCurtidas: respondeai,
      altCurtidas: "respondeai",

      usuarioCurtida: respondeai,
      qtdCurtidas: "101.523"

    },

    {
      id:2,
      imgUsuario:barked,
      altUsuario: "barked",
      usuario: "barked",

      imgConteudo: dog,
      altConteudo: "dog",

      imgCurtidas:adorableAnimals,
      altCurtidas: "adorableAnimals",

      usuarioCurtida:"adorable_animals",
      qtdCurtidas: "99.159"
    },


  ]
  return(
    <div className="posts">
      {
        posts.map((post) =>{
          return(
          <Post 
          key= {post.id} 
          imgUsuario={post.imgUsuario} 
          altUsuario={post.altUsuario}
          imgConteudo={post.imgConteudo}
          altConteudo={post.altConteudo}
          imgCurtidas={post.imgCurtidas}
          altCurtidas={post.altCurtidas}
          usuarioCurtida={post.usuarioCurtida}
          qtdCurtidas={post.qtdCurtidas}
          />)
        } )
      }
    </div>
  );
}