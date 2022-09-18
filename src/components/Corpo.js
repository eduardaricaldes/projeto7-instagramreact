import Esquerda from "./Esquerda/Esquerda";
import Sidebar from "./Sidebar/Sidebar";
export default function Corpo(){
  return(
    <div className="corpo">
      <Esquerda />
      <Sidebar/>
    </div>
  );
}