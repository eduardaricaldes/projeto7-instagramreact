import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
export default function Sidebar (){
  return (
    <div className= "sidebar">
      <Usuario/>
      <Sugestoes/>
    </div>
  );

}