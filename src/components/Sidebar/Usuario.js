import catanacomics from "../../assets/img/catanacomics.svg"
export default function Usuario (){
  return(
     <div className="usuario">
          <img src={catanacomics} alt="catanacomics"/>
          <div className="texto">
            <strong>catanacomics</strong>
            <span>
              Catana
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
  );
}