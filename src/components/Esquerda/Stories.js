import ninegag from "../../assets/img/9gag.svg";
import meowed from "../../assets/img/meowed.svg";
import barked from "../../assets/img/barked.svg";
import nathanwpylestrangeplanet from "../../assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../../assets/img/wawawicomics.svg";
import respondeai from "../../assets/img/respondeai.svg";
import filomoderna from "../../assets/img/filomoderna.svg";
import memeriagourmet from "../../assets/img/memeriagourmet.svg";
import Story from "./Story";

export default function Stories (){
  const stories= [
    {
      id:1,
      img: ninegag, 
      alt: "ninegag",
      usuario: "9gag",
    },

    {
      id:2,
      img: meowed,
      alt: "meowed",
      usuario: "meowed",
    },

    {
      id:3,
      img: barked,
      alt: "barked",
      usuario: "barked",
    },

    {
      id:4,
      img: nathanwpylestrangeplanet,
      alt: "nathanwpylestrangeplanet",
      usuario: "nathanwpylestrangeplanet",
    },

    {
      id:5,
      img:wawawicomics,
      alt: "wawawicomics",
      usuario: "wawawicomics",
    },

    {
      id:6,
      img:respondeai,
      alt: "respondeai",
      usuario: "respondeai",
    },

    {
      id:7,
      img:filomoderna,
      alt:"filomoderna",
      usuario: "filomoderna",
    },

    {
      id:8,
      img:memeriagourmet,
      alt: "memeriagourmet",
      usuario: "memeriagourmet",
    },

  ]
  return (
    <div className="stories">
      {
        stories.map((story)=>{
          return (
            <Story img= {story.img} alt={story.alt} usuario= {story.usuario} key={story.id}/>
          )
        })
      }
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}